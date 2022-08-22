

Swal.fire(
    'Activa tu ubicación',
    'Para que la app funcione correctamente activa tu ubiación',
    'info'
    )


window.addEventListener(`load`,()=>{
    
    let lon
    let lan

    let temperaturaValor = document.getElementById(`temperatura_valor`)
    let temperaturaDescripcion = document.getElementById(`temperatura_descripcion`)

    let ubicacion = document.getElementById(`ubicacion`)
    let iconoAnimado = document.getElementById(`icono_animado`)

    let VelocidadViento = document.getElementById(`velocidad_viento`)

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            /*console.log(posicion.coords.latitude)*/
            lon= posicion.coords.latitude
            lat= posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a5f38c59f83ae0c56eec264511b1f91f&units=metric&lang=sp`
            
            /*console.log(url)*/
            fetch(url)
                .then( response => { return response.json() })
                .then(data => {
                    console.log(data.main.temp)
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent= `${temp} ºC`
                    /*console.log(data.weather[0].description)*/
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name


                    VelocidadViento.textContent = `${data.wind.speed} m/s`
                    /*console.log(data.wind.speed)*/


                    /*Iconos animado*/

                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case`Clouds`:
                        iconoAnimado.src = `icono_clima/animated/cloudy.svg`
                        console.log(`Muy nublado`)
                        break;
                        case`Clear`:
                        iconoAnimado.src = `icono_clima/animated/day.svg`
                        console.log(`Despejado`)
                        break;
                        case`Rain`:
                        iconoAnimado.src = `icono_clima/animated/rainy-7.svg`
                        console.log(`Lluvia`)
                        break;
                        case`Snow`:
                        iconoAnimado.src = `icono_clima/animated/snowy-6.svg`
                        console.log(`Nieve`)

                    }       

                })
                .catch( error => {
                    console.log(error)
                })
    
        })
    

    

    }

})