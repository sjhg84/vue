export default {
    template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sjhg84/vue/tickets.css">
    <div class="tickets" v-if="showTickets">
        <div :class="[{'featured': ticket.isFeatured}, 'category-' + ticket.category.toLowerCase()]" v-for="ticket in tickets">
            <h3>{{ticket.category}}</h3>
            <p>{{ticket.doorprice}}</p>
            <h3>{{ticket.price}}</h3>
            <a class="ticket-btn" :href="ticket.url">BUY NOW</a>
        </div>
    </div>
    `,
    data() {
      return {
        showTickets: true,
        tickets: [],
      };
    },
    props: ['gsheet'],
    mounted() {
      fetch(this.gsheet)
        .then(res => res.json())
        .then(data => {
          this.tickets = this.transformData(data);
        })
        .catch(error => console.error('Error:', error));
    },
    methods: {
      transformData(data) {
        let arr = [];
        var cells = data.values;
        if (cells && cells.length > 1) {
          var headers = cells[0];
          for (var i = 1; i < cells.length; i++) {
            var rowObj = {};
            var row = cells[i];
            for (var j = 0; j < headers.length; j++) {
              rowObj[headers[j].toLowerCase()] = row[j];
            }
            arr.push(rowObj);
          }
        }
        return arr;
      }
    }
  };
