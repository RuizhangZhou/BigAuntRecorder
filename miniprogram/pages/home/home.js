Page({
  data: {
    lastRecord: null
  },
  onShow() {
    const history = wx.getStorageSync('bigAuntHistory') || [];
    if (history.length > 0) {
      // Sort by startDate, then get the last one
      history.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      const lastRecord = history[history.length - 1];

      // Calculate big aunt duration if both start and end dates exist
      if (lastRecord.startDate && lastRecord.endDate) {
        const start = new Date(lastRecord.startDate);
        const end = new Date(lastRecord.endDate);
        const diff = end - start; 
        // Duration in days
        lastRecord.duration = Math.floor(diff / (24 * 3600 * 1000)) + 1;
      }
      this.setData({ lastRecord });
    } else {
      this.setData({ lastRecord: null });
    }
  },
  goToRecord() {
    wx.navigateTo({
      url: '/pages/record/record'
    });
  },
  goToHistory() {
    wx.navigateTo({
      url: '/pages/history/history'
    });
  }
});
