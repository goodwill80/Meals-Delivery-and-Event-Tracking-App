export class scheduledEvent {
  constructor(event) {
    this.event = event;
    this.addresses = [];
    this.completed = false;
    this.imageUrls = [];
    this.remarks = '';
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
