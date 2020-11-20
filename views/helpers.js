module.exports = {
  getError(errors, prop) {
    try {
      return errors.mapped()[pop].msg;
    } catch (err) {
      return '';
    }
  }
};