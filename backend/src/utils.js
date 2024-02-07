module.exports = {
      calculateTotalSpent(options) {
            const { openedAt, closedAt, flowVolume } = options
            const secondsOpened = (new Date(closedAt) - new Date(openedAt)) / 1000
            return secondsOpened * 12.25 * flowVolume
      }
}