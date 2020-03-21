<template>
  <div class="calendar">
    <div class="month">
      <ul>
        <li @click="changeDate('reduce')" class="prev">❮</li>
        <li @click="changeDate('add')" class="next">❯</li>
        <li style="text-align:center">
          {{getEnglishMonthName}}
          <br />
          <span style="font-size:18px">{{selectedYear}}</span>
        </li>
      </ul>
    </div>
    <ul class="weekdays">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>
    <ul class="days">
        <li v-for="(item,index) in getMonthDates" :key="index" :class="{active:item.toDateString()===new Date().toDateString()}" @click="selectEvent(item)">{{item.getDate()}}</li>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
        return{
            monthName:['January','February','March','April','May ','June','July','August','September','October','November','December'],
            selectedDate:new Date().getDate(),
            selectedMonth:new Date().getMonth()+1,
            selectedYear:new Date().getFullYear(),
            selectedTime:new Date(),
        }
    },
    computed:{
      getEnglishMonthName(){
           return this.monthName.filter(i=>i.substring(0,3)===this.selectedTime.toDateString().split(' ')[1])[0]
      },
      getMonthDates(){
        let dates=[]
        let monthDates=new Date(this.selectedYear,this.selectedMonth,0).getDate()
        for(var i=1;i<=monthDates;i++){
           dates.push(new Date(this.selectedYear,this.selectedMonth-1,i));
        }
        let firstDate=new Date(this.selectedYear,this.selectedMonth-1,1).getDay()
        if(firstDate!==1){
          var number=firstDate==0?6:firstDate-1
          for(var j=0;j>-number;j--){
               dates.unshift(new Date(this.selectedYear,this.selectedMonth-1,j))   
          }
        }
        let lastDate=new Date(this.selectedYear,this.selectedMonth,0).getDay()
        if(lastDate!==0){
          for(var k=1;k<7-lastDate+1;k++){
             dates.push(new Date(this.selectedYear,this.selectedMonth-1,k+monthDates)) 
          }
        }
        return dates
      }
    },
    methods:{
        changeDate(label){
           label==='add'?this.selectedMonth++:this.selectedMonth--;
           var d=new Date();
           d.setMonth(this.selectedMonth-1)
           this.selectedYear=d.getFullYear();
           this.selectedTime=d
        },
        selectEvent(item){
            this.selectedDate=item.getDate();
            this.selectedMonth=item.getMonth()+1;
            this.selectedYear=item.getFullYear()
            this.selectedTime=item
        }
    }
}
</script>
<style lang="scss" scoped>
.calendar {
  box-sizing: border-box;
  font-family: Verdana, sans-serif;
  position: sticky;
  top: 6.7rem;
}
ul {
  list-style-type: none;
}
.month {
  box-sizing: border-box;
  padding: 70px 25px;
  width: 100%;
  background: #1abc9c82;
}

.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.month .prev {
  float: left;
  padding-top: 10px;
  cursor: pointer;
  user-select: none;
}

.month .next {
  float: right;
  padding-top: 10px;
  cursor: pointer;
  user-select: none;
}

.weekdays {
  font-size: 0.8rem;
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays li {
  display: inline-block;
  width: 12.7%;
  color: #666;
  text-align: center;
}

.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 14.28571429%;
  text-align: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #777;
  &:hover{
    // padding: 5px;
    background: #1abc9c;
    color: white !important;
    cursor: pointer;
  }
}

.days .active {
//   padding: 5px;
  background: #1abc9c;
  color: white !important;
}

/* 添加不同尺寸屏幕的样式 */
@media screen and (max-width: 720px) {
  .weekdays li,
  .days li {
    width: 13.1%;
  }
}
@media screen and (max-width: 420px) {
  .weekdays li,
  .days li {
    width: 12.5%;
  }
  .days li .active {
    padding: 2px;
  }
}
@media screen and (max-width: 290px) {
  .weekdays li,
  .days li {
    width: 12.2%;
  }
}
</style>