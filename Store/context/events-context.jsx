import { useState, createContext, useContext } from 'react';
import { volunteers, events, emergencies } from '../../Data/Dummy_data';
import Emergency from '../../Data/Models/Emergency';
const EventsContext = createContext({
  volunteers: [],
  events: [],
  emergencies: [],
  completeEvent: (volunteerId, eventId, imageUrl, remarks) => {},
  setEmergencies: (volunteer, event, remarks) => {},
  getVolunteerById: (id) => {},
  completeDelivery: (volunteerId, eventId, deliveryId) => {},
});

function EventsContextProvider({ children }) {
  const [allVolunteers, setAllVolunteers] = useState(volunteers);
  const [allEvents, setAllEvents] = useState(events);
  const [allEmergencies, setAllEmergencies] = useState(emergencies);

  const getVolunteerById = (id) => {
    const volunteer = allVolunteers.find((volunteer) => volunteer.id === id);
    if (volunteer) return volunteer;
  };

  const completeEvent = (volunteerId, eventId, imageUrl, remarks) => {
    const volunteer = allVolunteers.find(
      (volunteer) => volunteer.id === volunteerId
    );
    const updatedEvents = volunteer.scheduledEvents.map((evt) =>
      evt.event.id === eventId
        ? { ...evt, imageUrl: imageUrl, remarks: remarks, completed: true }
        : evt
    );
    const updatedVolunteer = {
      ...volunteer,
      scheduledEvents: [...updatedEvents],
    };
    const updatedVolunteers = allVolunteers.map((volunteer) =>
      volunteer.id === updatedVolunteer.id ? { ...updatedVolunteer } : volunteer
    );
    setAllVolunteers(() => updatedVolunteers);
  };

  const completeDelivery = (volunteerId, eventId, deliveryId) => {
    const volunteer = allVolunteers.find(
      (volunteer) => volunteer.id === volunteerId
    );
    const event = volunteer.scheduledEvents.filter(
      (evt) => evt.event.id === eventId
    );
    const deliveries = event.addresses.map((address) =>
      address.id === deliveryId ? { ...address, completed: true } : address
    );
    const updatedEvent = { ...event, addresses: [...deliveries] };
    const updatedVolunteer = volunteer
      ? {
          ...volunteer,
          scheduledEvents: [
            ...volunteer.scheduledEvents.map((evt) =>
              evt.id === updatedEvent.id ? updatedEvent : evt
            ),
          ],
        }
      : {};
    const updatedVolunteers = allVolunteers.map((volunteer) =>
      volunteer.id === updatedVolunteer.id ? { ...updatedVolunteer } : volunteer
    );
    setAllVolunteers(() => updatedVolunteers);
  };

  const setEmergencies = (
    volunteer,
    event,
    remarks,
    imageUrl,
    address = '',
    name = ''
  ) => {
    setAllEmergencies([
      ...allEmergencies,
      new Emergency(volunteer, event, remarks, imageUrl, address, name),
    ]);
  };

  const ctx = {
    allVolunteers: allVolunteers,
    allEvents: allEvents,
    allEmergencies: allEmergencies,
    completeEvent: completeEvent,
    setEmergencies: setEmergencies,
    getVolunteerById: getVolunteerById,
    completeDelivery: completeDelivery,
  };

  return (
    <EventsContext.Provider value={ctx}>{children}</EventsContext.Provider>
  );
}

export default EventsContextProvider;

export const useGlobalEventsContext = () => useContext(EventsContext);
