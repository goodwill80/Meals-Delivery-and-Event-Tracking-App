export class scheduledEvent {
  constructor(event, completed) {
    this.id = Math.round(Math.random() * 1000).toString();
    this.event = event;
    this.addresses = []; // Meals on wheels 
    this.completed = completed ? completed : false;
    this.imageUrl = '';
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
