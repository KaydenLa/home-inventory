<script setup>
//EXTERNAL PAGE FROM VUE. 
//THIS ENTiRE FILE SHOULD BE DELETED.
//JUST USING FOR A REFERENCE FOR NOW.




import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const days = ref("Blank weather")
  const temps = ref("Blank Temp")

  function edit_days(val) {
    days.value = val
  }

  function edit_temps(val) {
    temps.value = val
  }

  return {days, temps, edit_days, edit_temps }
})










import { ref } from 'vue'
import axios from 'axios'


//Form Scripts
const form_input = ref(
  {
    def_dt: "",
    location: "",
    end_dt: "",

  })

const temps = ""
const days = ""

// https://rapidapi.com/weatherapi/api/weatherapi-com/
async function fetch_remote_data() {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/history.json',
    params: {
      q: form_input.value.location,
      dt: form_input.value.def_dt,
      end_dt: form_input.value.end_dt,
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '7eeb01fbd2msh7a37bfe623b7068p1d8ec1jsn2a0059736eb6',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    await axios.request(options).then((resp) => {
      const w_data = resp.data.forecast.forecastday
      const days = w_data.map((item) => item.date);
      const temps = w_data.map((item) => item.day.avgtemp_f)
      console.log(days);
      console.log(temps);
      console.log(resp);
      homeStore.edit_days(days)
      homeStore.edit_temps(temps)
    })
  } catch (error) {
    console.error(error);
  }
}

//PINIA Scripts
import { useWeatherStore } from '@/stores/weather';
const homeStore = useWeatherStore()

</script>

<template>
  <form @submit.prevent="fetch_remote_data">
    <div>
      <label for="">Location</label>
      <input type="text" v-model="form_input.location" required />
    </div>
    <div>
      <label for="">Start Date</label>
      <input type="date" v-model="form_input.def_dt" required />
    </div>
    <div>
      <label for="">End Date</label>
      <input type="date" v-model="form_input.end_dt" required />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  {{ homeStore.days }}
  <br>
  {{ homeStore.temps }}
</template>

<style></style>




