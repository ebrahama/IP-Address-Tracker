              /* con ft */
const ipa = document.getElementById("current_ip")
const loc = document.getElementById("current_town")
const tiz = document.getElementById("current_zone")
const isp = document.getElementById("current_isp")

const ser = document.getElementById("sert")
const sub = document.getElementById("sumb")

    /* api ipify */

 

    const fapi = async() => {

        const res = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_B4jIITmpGuMzvSC2FGYuVSOu3EZvQ&ipAddress=' + ser.value)
        const data = await res.json()

        ser.value = (data.ip)
          ipa.innerText = (data.ip)
          loc.innerText = (data.location.country + " , "+ data.location.region +" , "+ data.location.city +" , "+ data.location.postalCode) 
          tiz.innerText = ( "UTC"+" "+ data.location.timezone)
          isp.innerText = (data.isp)
          ser.value = ("")

         updateMarker([data.location.lat, data.location.lng])


      //updateMarker = (update_marker = [-33.665, 18.993]) => {
   // map.setView(update_marker, 13);
   //L.marker(update_marker).addTo(map);
}
fapi()


//setView(update_marker, 13)
//L.marker(update_marker).addTo(map)
 
 updateMarker = (update_marker = [-33.665, 18.993]) => {
    map.setView(update_marker, 13);
    L.marker(update_marker).addTo(map);
     }

              /* map */

const map = L.map('map').

setView([53.505, -0.09], 13);
L.marker([53.5, -0.09]).addTo(map)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map); 

