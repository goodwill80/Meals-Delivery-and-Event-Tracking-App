class Emergency {
  constructor(volunteer, event, remarks, imageUrl) {
    this.id = Math.round(Math.random() * 1000).toString();
    this.imageUrl = '';
    this.volunteer = volunteer;
    this.event = event;
    this.remarks = remarks;
    this.imageUrl = imageUrl;
  }
}

export default Emergency;
