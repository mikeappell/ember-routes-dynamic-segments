export default function() {
  this.namespace = 'api';
  this.get('/artists');
  this.get('/artists/:aritst_id');
}
