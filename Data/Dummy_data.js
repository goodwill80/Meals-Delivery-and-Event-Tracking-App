import Volunteer from './Models/Volunteer';
import Event from './Models/Event';
import { scheduledEvent } from './Models/Volunteer';
// import Emergency from './Models/Emergency';

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
    'Please be in casual attire.',
    false,
    'Listen to stories and shared wisdoms'
  ),
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'After School Care Service',
    'https://playfactoschool.com.sg/wp-content/uploads/2020/09/3-2-1024x576.jpg',
    '123, Pasir ris Ave 2, #01-02, Singapore 123456',
    '2023-06-03',
    '1300hrs to 1800hrs',
    '1230hrs',
    'Please feel free to bring along any children story books.',
    false,
    'provide enrichments to afternoon primary school children'
  ),
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'Children Tuition Center Service',
    'https://playfactoschool.com.sg/wp-content/uploads/2020/09/3-3-553x400.jpg',
    '123, Novena Road, #01-02, Singapore 123456',
    '2023-06-10',
    '1300hrs to 1800hrs',
    '1230hrs',
    'Please feel free to bring along any enrichment story books.',
    false,
    'Provide tuition to secondary school students'
  ),
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'Elderly Home Cleaning',
    'https://playfactoschool.com.sg/wp-content/uploads/2020/09/3-2-1024x576.jpg',
    '123, Pasir ris Ave 2, #01-02, Singapore 123456',
    '2023-06-03',
    '1300hrs to 1800hrs',
    '1230hrs',
    'Please feel free to bring along any house cleaning equipments.',
    false,
    'Home cleaning of elderly living alone'
  ),
  new Event(
    Math.round(Math.random() * 1000).toString(),
    'Meals Delivery at Boon Lay',
    'https://willinghearts.org.sg/wp-content/uploads/2014/04/wwhd-pic1.jpg',
    '123, Boon Ave 2, #01-02, Singapore 123456',
    '2023-06-03',
    '1300hrs to 1800hrs',
    '1230hrs',
    'Please ensure you have google map downloaded on your mobile phone',
    true,
    'Delivery of lunch to homes of elderly'
  ),
];

export const emergencies = [];

// Enroll volunteer at index 0 in Events
volunteers[0].scheduledEvents.push(
  new scheduledEvent(events[0]),
  new scheduledEvent(events[1]),
  new scheduledEvent(events[2]),
  new scheduledEvent(events[3]),
  new scheduledEvent(events[4])
);

// Meals-on-wheel locations
volunteers[0].scheduledEvents[4].addresses.push(
  '162 Bukit Merah Central #05-3545 Singapore 150162',
  '5 Jurong West Street 74 Singapore 649151',
  '4 Changi Business Park Ave 1 Singapore 486016',
  '668, woodlands ring road #01-05 Singapore 947576'
);

events[0].volunteersEnrolled.push(volunteers[0]);
events[1].volunteersEnrolled.push(volunteers[0]);
events[2].volunteersEnrolled.push(volunteers[0]);
events[3].volunteersEnrolled.push(volunteers[0]);
events[4].volunteersEnrolled.push(volunteers[0]);

// Enroll volunteer at index 1 in Events
volunteers[1].scheduledEvents.push(
  new scheduledEvent(events[0]),
  new scheduledEvent(events[1]),
  new scheduledEvent(events[2]),
  new scheduledEvent(events[3])
);
events[0].volunteersEnrolled.push(volunteers[1]);
events[1].volunteersEnrolled.push(volunteers[1]);
events[2].volunteersEnrolled.push(volunteers[1]);
events[3].volunteersEnrolled.push(volunteers[1]);

// Enroll volunteer at index 2 in Events
volunteers[2].scheduledEvents.push(
  new scheduledEvent(events[0]),
  new scheduledEvent(events[1]),
  new scheduledEvent(events[2]),
  new scheduledEvent(events[3])
);
events[0].volunteersEnrolled.push(volunteers[2]);
events[1].volunteersEnrolled.push(volunteers[2]);
events[2].volunteersEnrolled.push(volunteers[2]);
events[3].volunteersEnrolled.push(volunteers[2]);

// Enroll volunteer at index 3 in Events
volunteers[3].scheduledEvents.push(
  new scheduledEvent(events[0]),
  new scheduledEvent(events[1]),
  new scheduledEvent(events[2]),
  new scheduledEvent(events[3])
);
events[0].volunteersEnrolled.push(volunteers[3]);
events[1].volunteersEnrolled.push(volunteers[3]);
events[2].volunteersEnrolled.push(volunteers[3]);
events[3].volunteersEnrolled.push(volunteers[3]);
