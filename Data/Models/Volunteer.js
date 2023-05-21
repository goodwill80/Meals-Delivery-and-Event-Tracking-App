export class scheduledEvent {
  constructor(event) {
    this.enrolledEvent = {
      event: event,
      addresses: [],
      completed: false,
      imageUrls: [],
      remarks: '',
    };
  }
}

class Volunteer {
  constructor(id, name, imageUrl, email, phone) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.email = email;
    this.phone = phone;
    this.scheduledEvents = [];
    this.emergencies = [];
  }
}

export default Volunteer;
