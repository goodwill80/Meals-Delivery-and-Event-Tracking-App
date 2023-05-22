class Emergency {
  constructor(volunteer, event, remarks) {
    this.id = Math.round(Math.random() * 1000).toString();
    this.imageUrl = '';
    this.volunteer = volunteer;
    this.event = event;
    this.remarks = remarks;
  }
}

export default Emergency;
