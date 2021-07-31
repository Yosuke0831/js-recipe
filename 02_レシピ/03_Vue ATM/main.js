new Vue({
  el: "#atm",
  data: {
    nyuuryokugaku: 0,
    total: 0,
    logs: [],
  },
  method: {
    nyuukinn: function() {
      this.total += Number(this.nyuuryokugaku)
      const now = new Date()
      this.logs.push({
        date: now,
        type: "入金",
        money: this.nyuuryokugaku,
      })
    },
    syukkinn: function() {
      this.total -= Number(this.nyuuryokugaku)
      const now = new Date()
      this.logs.push({
        date: now,
        type: "入金",
        money: this.nyuuryokugaku,
      })
    },
  },
})
