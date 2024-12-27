Page({
  data: {
    startDate: '',
    endDate: '',
    notes: ''
  },
  onLoad() {
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // "YYYY-MM-DD"
    this.setData({
      startDate: today,
      endDate: today
    });
  },
  onStartDateChange(e) {
    this.setData({
      startDate: e.detail.value
    });
  },
  onEndDateChange(e) {
    this.setData({
      endDate: e.detail.value
    });
  },
  onNotesInput(e) {
    this.setData({
      notes: e.detail.value
    });
  },
  saveRecord() {
    const { startDate, endDate, notes } = this.data;
    let history = wx.getStorageSync('bigAuntHistory') || [];

    const newRecord = {
      startDate,
      endDate,
      notes
    };

    history.push(newRecord);
    wx.setStorageSync('bigAuntHistory', history);

    wx.showToast({
      title: 'Record Saved',
      icon: 'success',
      duration: 1500
    });

    wx.navigateBack();
  }
});
