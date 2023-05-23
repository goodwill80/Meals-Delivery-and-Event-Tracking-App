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

  const setEmergencies = (volunteer, event, remarks, imageUrl) => {
    setAllEmergencies([
      ...allEmergencies,
      new Emergency(volunteer, event, remarks, imageUrl),
    ]);
  };

  const ctx = {
    allVolunteers: allVolunteers,
    allEvents: allEvents,
    allEmergencies: allEmergencies,
    completeEvent: completeEvent,
    setEmergencies: setEmergencies,
    getVolunteerById: getVolunteerById,
  };

  return (
    <EventsContext.Provider value={ctx}>{children}</EventsContext.Provider>
  );
}

export default EventsContextProvider;

export const useGlobalEventsContext = () => useContext(EventsContext);
