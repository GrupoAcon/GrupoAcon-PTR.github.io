

//  console.log(parseFloat(18345/(0.245*75000)))
  const datee = document.querySelector("input[name=fecha]");

        let date = new Date();
        let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
datee.value=output;
  datee.addEventListener('click', ()=>{
        datee.type='date';
  })
 
 document.querySelector("input[type=submit]").addEventListener("click",function(e){
    // cancelamos el evento
    e.preventDefault();
    
  const fecha=document.querySelector("input[name=fecha]");
  
  const finca=document.querySelector("input[name=finca]");
  
  
  const gForza=document.querySelector("input[name=gForza]")
  
  
 
    const lote=document.querySelector("input[name=lote]");
    const block=document.querySelector("input[name=block]");
    
    const tipoSemilla=document.querySelector("select[name=tipoSemilla]");
    
    const rango=document.querySelector("input[name=rango]");
    
    const area=document.querySelector("input[name=area]");
    
    const cantidadPlantas=document.querySelector("input[name=cantidadPlantas]");
    
  const afectacion=document.querySelector("input[name=afectacion]").value=parseFloat(cantidadPlantas.value/(area.value*75000));
   
  

  // Validations 

  // afectacion.classList.remove("error")
  
  if (!gForza.value ) { 
    gForza.classList.add("error")
    return; 
  }
  gForza.classList.remove("error"); 


  if (!lote.value) {
    lote.classList.add("error")
     return;
    }
    lote.classList.remove("error")

  if(!block.value){
    block.classList.add("error")
    return;
  }
  block.classList.remove("error")

  if (!tipoSemilla.value) {
    tipoSemilla.classList.add("error")
    return;
  }
  tipoSemilla.classList.remove("error")

  if (!rango.value) {
    rango.classList.add("error")
    return;
  }
  rango.classList.remove("error")

  if (!area.value) {
    area.classList.add("error")
    return;
  }
   area.classList.remove("error");

  if (!cantidadPlantas.value) {
    cantidadPlantas.classList.add("error")
    return;
  }
  cantidadPlantas.classList.remove("error")

    // mostramos un error si no ha recibido una edad
    // if (isNaN(parseInt(block.value)) || parseInt(block.value)<=0) {
    //     block.classList.add("error");
    //     return;
    // }
    // block.classList.remove("error");
 
    agregarFila(fecha.value, finca.value, gForza.value, lote.value, block.value, tipoSemilla.value, rango.value, area.value, cantidadPlantas.value, afectacion.valuee=parseFloat(cantidadPlantas.value/(area.value*75000)));
    
   // agregarInput(fecha.value, finca.value, gForza.value, lote.value, block.value, tipoSemilla.value, rango.value, area.value, cantidadPlantas.value, afectacion.value=parseFloat(cantidadPlantas.value/(area.value*75000)));
    
    //=(F59/(E58*75000)*100)
    
 // DAMOS UN FORMATO DE  FECHA O FUNCTION 




 
    //limpiamos los valores del input y defino el valor dentro del value o valor
  fecha.value=fecha.value;
  finca.value="PTR";
  gForza.value= gForza.value;
  lote.value=lote.value;
  block.value="";
  tipoSemilla.value="";
  rango.value="";
  area.value="";
  cantidadPlantas.value="";
  afectacion.value= parseFloat(cantidadPlantas.value/(area.value*75000));
  lote.focus();
 
});

    const $btnExportar = document.querySelector("#btnExportar"),
        $tabla = document.querySelector("#tabla")
    
    $btnExportar.addEventListener("click", function() {
      const gForza=document.querySelector("input[name=gForza]")
      
        let tableExport = new TableExport($tabla, {
            exportButtons: false, // No queremos botones
            filename: `G-Forza ${gForza.value}`, //Nombre del archivo de Excel
            sheetname: `G-Forza ${gForza.value}`, //Título de la hoja
        });
        let datos = tableExport.getExportData();
        let preferenciasDocumento = datos.tabla.xlsx;
        tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
    });
    
function agregarFila(fecha, finca, gForza, lote, block, tipoSemilla, rango, area, cantidadPlantas, afectacion) {
    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo
    
  
  const tr=document.createElement("tr");
    const tdLote=document.createElement("td");
    let txt=document.createTextNode(lote);
    tdLote.appendChild(txt);
    tdLote.className="lote";
 
 
 //separador
  const tdFecha=document.createElement("td");
  txt=document.createTextNode(fecha)
  tdFecha.appendChild(txt)
  tdFecha.className="fecha"
 //Separacion 
 const tdFinca=document.createElement("td");
   txt=document.createTextNode(finca)
  tdFinca.appendChild(txt)
  tdFinca.className="finca"
  
  
  const tdForza=document.createElement("td");
  txt=document.createTextNode(gForza);
  tdForza.appendChild(txt);
  tdForza.className="gForza";

 //Separacion lote 
 
   
    const tdBlock=document.createElement("td");
    txt=document.createTextNode(block);
    tdBlock.appendChild(txt);
    tdBlock.className="right";
    
    const tdTipoSemilla=document.createElement("td")
    txt=document.createTextNode(tipoSemilla)
    tdTipoSemilla.appendChild(txt)
    tdTipoSemilla.className="tipoSemilla";
   
  const tdRango=document.createElement("td");
  txt=document.createTextNode(rango);
  tdRango.appendChild(txt);
  tdRango.className="rango";
  
  // Separador
  const tdArea = document.createElement("td");
  txt=document.createTextNode(area);
  tdArea.appendChild(txt);
  tdArea.className="area";
  
  
  //Separador 
  const tdCantidadPlantas = document.createElement('td');
  txt = document.createTextNode(cantidadPlantas);
  tdCantidadPlantas.appendChild(txt);
  tdCantidadPlantas.className="cantidadPlantas";
  

//Separador

const tdAfectacion = document.createElement('td');
txt = document.createTextNode(afectacion);
tdAfectacion.appendChild(txt);
tdAfectacion.className="afectacion";


const tdRemove = document.createElement("td");
    const buttonRemove = document.createElement("buttom");

   buttonRemove.textContent = "☬";
  // buttonRemove.add.classList("")
  //  buttonRemove.type="button";
  //  buttonRemove.value= "☬";
   // const li = document.createElement("li").className="bi bi-trash";
    //li.innerHTML = buttonRemove;
   //buttonRemove.src = "";
    buttonRemove.onclick = eliminarFila;
    tdRemove.appendChild(buttonRemove);
    
    txt = document.createTextNode(buttonRemove)
    tdRemove.className = "buttonRemove";
    
 
    tr.appendChild(tdFecha)
    tr.appendChild(tdFinca)
    tr.appendChild(tdForza)
    tr.appendChild(tdLote);
    tr.appendChild(tdBlock);
    tr.appendChild(tdTipoSemilla);
    tr.appendChild(tdRango);
    tr.appendChild(tdArea);
    tr.appendChild(tdCantidadPlantas);
    tr.appendChild(tdAfectacion);
    
    
    
    tr.appendChild(tdRemove);
 
    const tbody=document.getElementById("tabla").querySelector("tbody").appendChild(tr);
    
    // eliminamos la clase que tiene oculta la tabla cando no hay ningun alumno
    // document.getElementById("tabla").classList.remove("hide");
}
 
/**
 * Funcion para eliminar el usuario de la tabla y llamar a la funcion
 * para eliminar al usuario del input oculto
 */
function eliminarFila(e) {
    const tr=this.closest("tr")
    const fecha=tr.querySelector(".fecha").remove();
    const finca=tr.querySelector(".finca").remove();
    const gForza=tr.querySelector(".gForza").remove();
    const lote=tr.querySelector(".lote").remove();
    const block=tr.querySelector(".right").remove();
    
    const tipoSemilla = tr.querySelector('.tipoSemilla').remove();
    
    const rango = tr.querySelector('.rango').remove();
    
    const area=tr.querySelector('.area').remove();
    
    const cantidadPlantas=tr.querySelector('.cantidadPlantas').remove();
 
    const afectacion=tr.querySelector('.afectacion').remove();
    
    const buttonRemove=tr.querySelector(".buttonRemove").remove()
    
        
    
};
 
