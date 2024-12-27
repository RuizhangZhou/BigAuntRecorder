Page({
  data: {
    history: []
  },
  onShow() {
    const history = wx.getStorageSync('bigAuntHistory') || [];
    // Sort from newest to oldest by start date
    history.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    this.setData({ history });
  }
});
