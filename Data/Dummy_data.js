import Volunteer from './Models/Volunteer';
import Event from './Models/Event';
import { scheduledEvent } from './Models/Volunteer';
import Emergency from './Models/Emergency';

//  Volunteers
export const volunteers = [
  new Volunteer(
    Math.round(Math.random() * 1000).toString(),
    'Jon',
    'https://mountstudio.com.sg/wp-content/uploads/Corporate-Portrait-Headshot.jpg',
    'jon@gmail.com',
    '983748576'
  ),
  new Volunteer(
    Math.round(Math.random() * 1000).toString(),
    'Ace',
    'https://www.bespokephotography.sg/wp-content/uploads/DSC09042-2-683x1024.jpg',
    'ace@gmail.com',
    '9478576843'
  ),
  new Volunteer(
    Math.round(Math.random() * 1000).toString(),
    'Claire',
    'https://www.shutterturf.com/wp-content/uploads/2021/02/Boban-James-5.jpeg',
    'claire@gmail.com',
    '904578345'
  ),
  new Volunteer(
    Math.round(Math.random() * 1000).toString(),
    'Ying Wang',
    'https://ohdearstudio.com.sg/wp-content/uploads/2023/03/SINGAPORE-Black-And-White-Professional-Headshots-732x1024.jpg',
    'yw@gmail.com',
    '983204782'
  ),
];

// Events
export const events = [
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'Befriended Service at Nursing Home',
    'https://www.thebestsingapore.com/wp-content/uploads/2023/04/Best-Elderly-Care-Singapore-Review-720x408.jpg',
    '233, Ang Mo Kio Ave 2, #01-05, Singapore 123456',
    '2023-06-01',
    '0900hrs to 1200hrs',
    '0830hrs',
    'Please be in casual attire.'
  ),
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'After School Care Service',
    'https://playfactoschool.com.sg/wp-content/uploads/2020/09/3-2-1024x576.jpg',
    '123, Pasir ris Ave 2, #01-02, Singapore 123456',
    '2023-06-03',
    '1300hrs to 1800hrs',
    '1230hrs',
    'Please feel free to bring along any children story books.'
  ),
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'Children Tuition Center Service',
    'https://playfactoschool.com.sg/wp-content/uploads/2020/09/3-3-553x400.jpg',
    '123, Novena Road, #01-02, Singapore 123456',
    '2023-06-10',
    '1300hrs to 1800hrs',
    '1230hrs',
    'Please feel free to bring along any enrichment story books.'
  ),
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'Elderly Home Cleaning',
    'https://playfactoschool.com.sg/wp-content/uploads/2020/09/3-2-1024x576.jpg',
    '123, Pasir ris Ave 2, #01-02, Singapore 123456',
    '2023-06-03',
    '1300hrs to 1800hrs',
    '1230hrs',
    'Please feel free to bring along any house cleaning equipments.'
  ),
];

// Enroll volunteers in Events
volunteers[0].scheduledEvents.push(
  new scheduledEvent(events[0]),
  new scheduledEvent(events[1]),
  new scheduledEvent(events[2]),
  new scheduledEvent(events[3])
);
