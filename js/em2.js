(function() {
  var motorReaction;

  motorReaction = (function() {
    motorReaction.prototype.totalEjercicios = 25;

    motorReaction.prototype.cantidadElegir = 3;

    motorReaction.prototype.cartasSinElegir = [];

    motorReaction.prototype.nivel = 3;

    motorReaction.prototype.pausa = 0;

    motorReaction.prototype.operadores = [];

    motorReaction.prototype.variables = [];

    motorReaction.prototype.nots = [];

    motorReaction.prototype.salida = "";

    motorReaction.prototype.chequear = "";

    motorReaction.prototype.resultado = 0;

    motorReaction.prototype.contador = 0;

    motorReaction.prototype.t_ini = 0;

    motorReaction.prototype.t_fin = 0;

    motorReaction.prototype.t_dif = 0;

    motorReaction.prototype.t_total = 0;

    motorReaction.prototype.t_promedio = 0;

    motorReaction.prototype.jugadas = 0;

    motorReaction.prototype.promedio_total = 0;

    motorReaction.prototype.pasadas = 0;

    motorReaction.prototype.mejora = 0;

    motorReaction.prototype.estado = 0;

    motorReaction.prototype.parar = 0;

    motorReaction.prototype.killTimeout = 0;

    motorReaction.prototype.killTimeout3 = 0;

    motorReaction.prototype.killTimeout5 = 0;

    motorReaction.prototype.killTimeout6 = 0;

    motorReaction.prototype.totalPasadas = 8;

    motorReaction.prototype.aciertos = 0;

    motorReaction.prototype.errores = 0;

    motorReaction.prototype.penaTiempo = 0;

    motorReaction.prototype.espacios = "";

    motorReaction.prototype.hola = 0;

    motorReaction.prototype.tipo = 0;

    motorReaction.prototype.alfabeto = [];

    motorReaction.prototype.memoriaM = [];

    motorReaction.prototype.memoriaM2 = [];

    motorReaction.prototype.memoriaM2Elegidas = [];

    motorReaction.prototype.memoriaJugadas = 0;

    motorReaction.prototype.cantidadElegirM2 = 0;

    motorReaction.prototype.memoriaAnterior = 0;

    motorReaction.prototype.ejercicioGlobal = 0;

    motorReaction.prototype.ejerciciosActivos = [];

    motorReaction.prototype.tiempoEjercicios = [];

    motorReaction.prototype.tieneMemoria = 0;

    motorReaction.prototype.tieneMemoria2 = 0;

    motorReaction.prototype.ejercicioSeleccionado = 0;

    motorReaction.prototype.tiempoEjercicioInicial = 0;

    motorReaction.prototype.noEsta1 = "";

    motorReaction.prototype.articulos = [];

    motorReaction.prototype.sustantivos = [];

    motorReaction.prototype.adjetivos = [];

    motorReaction.prototype.resultados = [];

    motorReaction.prototype.coloresResultados = [];

    motorReaction.prototype.leyendaResultados = [];

    motorReaction.prototype.ojosImagenes = [];

    motorReaction.prototype.ojosLeyendas = [];

    motorReaction.prototype.ojosAnterior = 0;

    motorReaction.prototype.ojosPasadas = 0;

    motorReaction.prototype.leyendaAnterior = 0;

    motorReaction.prototype.esInverso = 0;

    motorReaction.prototype.ejerciciosAnteriores = [];

    motorReaction.prototype.erroresEjercicios = [];

    motorReaction.prototype.totalEjerciciosMemoria = 13;

    motorReaction.prototype.ejerciciosActivosMemoria = [];

    motorReaction.prototype.cantidadEjerciciosMemoria = 13;

    motorReaction.prototype.ejercicioSeleccionadoMemoria = 0;

    motorReaction.prototype.PAO = [];

    motorReaction.prototype.bPAO = 0;

    motorReaction.prototype.mixTiempos = [];

    motorReaction.prototype.esMovil = 0;

    motorReaction.prototype.numeroSumFlash = 0;

    motorReaction.prototype.acumuladorSumFlash = 0;

    motorReaction.prototype.jugadasSumFlash = 0;

    motorReaction.prototype.teclaCalendario = [];

    motorReaction.prototype.tiempoEstado = 0;

    motorReaction.prototype.teclaNotas = [];

    motorReaction.prototype.cantidadMemoria2 = 0;

    motorReaction.prototype.segundos = 3;

    motorReaction.prototype.entrarMemoria = 0;

    motorReaction.prototype.cantidad1 = 0;

    motorReaction.prototype.myZoom = "100%";

    motorReaction.prototype.nombreRandom = "";

    motorReaction.prototype.constantTime = 0;

    motorReaction.prototype.emocionesIncluidas = [];

    motorReaction.prototype.tieneEmocionesIncluidas = 0;

    motorReaction.prototype.cantidadIncluido = 0;

    motorReaction.prototype.killTimeout7 = 0;

    motorReaction.prototype.contadorIncluido = 0;

    motorReaction.prototype.cantidadProposiciones = 0;

    motorReaction.prototype.tSuma = [];

    motorReaction.prototype.tSumaFila = [];

    motorReaction.prototype.resultado1 = 0;

    motorReaction.prototype.tMulti = [];

    motorReaction.prototype.tMultFila = [];

    motorReaction.prototype.cMulti = 0;

    motorReaction.prototype.mMR = [];

    motorReaction.prototype.mCurrentMR = [];

    motorReaction.prototype.ejerciciosMR = [];

    motorReaction.prototype.seleccionMR = "";

    motorReaction.prototype.matrizSeleccionMR = [];

    motorReaction.prototype.matrizMRConfiguracion = [];

    motorReaction.prototype.todasConfiguracionesMR = [];

    motorReaction.prototype.digitosMR = 0;

    motorReaction.prototype.tipoMR = 0;

    motorReaction.prototype.espacioMR = 0;

    motorReaction.prototype.ejerciciosMR = [];

    motorReaction.prototype.primeraMR = 0;

    motorReaction.prototype.selectedMRAccion = 0;

    motorReaction.prototype.tipoMRGo = 0;

    motorReaction.prototype.tiempoMRGo = 0;

    motorReaction.prototype.digitosMRGo = 0;

    motorReaction.prototype.matrizMRConfiguracionGo = [];

    motorReaction.prototype.resultadosMRGo = [];

    motorReaction.prototype.contadorMR = 0;

    motorReaction.prototype.arrayMRBin = [];

    motorReaction.prototype.bMRGo = 1;

    motorReaction.prototype.restaYMR = 0;

    motorReaction.prototype.preventHelp = 0;

    motorReaction.prototype.bCantidadPasadasCalendar = 0;

    motorReaction.prototype.cantidadPasadasCalendar = 1;

    motorReaction.prototype.contadorCantidadPasadasCalendar = 0;

    motorReaction.prototype.preventCalendar = 0;

    motorReaction.prototype.countMemoria2 = 1;

    motorReaction.prototype.sumFlashElegido = 0;

    motorReaction.prototype.nextQuestionDelay = 0;

    motorReaction.prototype.__salida = "";

    motorReaction.prototype.configApp = "";

    motorReaction.prototype.resultadosList = "";

    motorReaction.prototype.nuevoResultado = "";

    motorReaction.prototype._tR = "";

    motorReaction.prototype._tR1 = "";

    motorReaction.prototype._tR2 = "";

    motorReaction.prototype._tR3 = "";

    motorReaction.prototype.killTimeoutSumFlash = 0;

    motorReaction.prototype.senglarMindMode = 0;

    motorReaction.prototype.timeInitSenglarMindMode = 0;

    motorReaction.prototype.timeEndSenglarMindMode = 0;

    motorReaction.prototype.timeDiffSenglarMindMode = 0;

    motorReaction.prototype.bMemoria2 = 0;

    motorReaction.prototype.wToN = [];

    function motorReaction() {
      var i, isAndroid, isiPad, isiPhone, m, myUrl, o, p, q, ref, ref1, seccion, t, ua, xx;
      window.arrCol = [$("#txt0").val(), $("#txt1").val(), $("#txt2").val(), $("#txt3").val(), $("#txt4").val(), $("#txt5").val(), $("#txt6").val(), $("#txt7").val(), $("#txt8").val(), $("#txt9").val()];
      $("#resultados-div").hide();
      $(".clear-result-btn-class").hide();
      $("#senglarMindMode").click((function(_this) {
        return function() {
          _this.senglarMindMode = !_this.senglarMindMode;
          if (_this.senglarMindMode) {
            $("#cantPasadas").prop('disabled', true);
            $("#cantPasadas").val("30");
            _this.checkboxAction("quitar", "ch", 21, 30);
            $("#ch21").prop('checked', true);
            $("#ch22").prop('checked', false);
            $("#ch23").prop('checked', false);
            $("#ch24").prop('checked', false);
            return $("#ch25").prop('checked', false);
          } else {
            return $("#cantPasadas").prop('disabled', false);
          }
        };
      })(this));
      $("#result-link").click((function(_this) {
        return function() {
          $("#resultados-div").show();
          $(".clear-result-btn-class").show();
          return $("#resultados-div").html(_this.resultadosList);
        };
      })(this));
      $(".clear-result-btn-class").click((function(_this) {
        return function() {
          $(".clear-result-btn-class").hide();
          _this.resultadosList = "";
          $("#resultados-div").html(_this.resultadosList);
          return localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
        };
      })(this));
      this.configApp = localStorage.getItem("configAppLocalStorage");
      this.resultadosList = localStorage.getItem("reultadosListLocalStorage");
      if (this.resultadosList === null) {
        this.resultadosList = "";
        localStorage.setItem("reultadosListLocalStorage", this.resultadosList);
      }
      if (this.configApp === null) {
        this.configApp = window.configDefault;
        localStorage.setItem("configAppLocalStorage", this.configApp);
      } else {
        this.cargarConfiguracionTotal();
      }
      $("#reset-config-btn").add("#reset-config-btn1").click((function(_this) {
        return function() {
          if (confirm('Estás seguro que quieres resetear las configuraciones?')) {
            _this.configApp = window.configDefault;
            localStorage.setItem("configAppLocalStorage", _this.configApp);
            _this.cargarConfiguracionTotal();
            $("#div-configurar").hide();
            return location.hash = "#top";
          }
        };
      })(this));
      $("#close-config-btn").add("#close-config-btn1").click((function(_this) {
        return function() {
          $("#div-configurar").hide();
          return location.hash = "#top";
        };
      })(this));
      $("#boton-guardar").add("#boton-guardar1").click((function(_this) {
        return function() {
          var _inputs, values;
          location.hash = "#top";
          $("#div-configurar").hide();
          _inputs = $('#myForm200 :input');
          values = {};
          _this.__salida = "";
          _inputs.each(function(element, index) {
            var __id, __type, __val;
            __val = $(index).val();
            __id = $(index).attr('id');
            __type = $(index).attr('type');
            if ((__type === "text" || __type === "checkbox" || __type === "color") && __type !== "undefined" && __val !== "") {
              if (__type === "checkbox") {
                __val = false;
                if ($("#" + __id).is(':checked')) {
                  __val = true;
                }
              }
              return _this.__salida += __type + "|" + __id + "|" + __val + "\n";
            }
          });
          _this.configApp = _this.__salida.slice(0, -1);
          localStorage.setItem("configAppLocalStorage", _this.configApp);
          console.log(_this.configApp);
          if ($("#multiSinestesia").is(':checked')) {
            return eval("\nconsole.log(\"repaint\");\n\nfor(i=0;i<=9;i++){\n\n					    arrCol[i]= $(\"#txt\"+i).val();\n					    //console.log(arrCol[i]);\n					    //$(\"#txt\"+i).val(arrCol[i]);\n\n					  }\n\n$(\".num0-1\").css(\"color\",arrCol[0]);\n\n$(\".num1\").css(\"background-color\",arrCol[1]);\n$(\".num1\").css(\"color\",arrCol[1]);\n$(\".num1-1\").css(\"color\",arrCol[1]);\n\n$(\".num2\").css(\"background-color\",arrCol[2]);\n$(\".num2\").css(\"color\",arrCol[2]);\n$(\".num2-1\").css(\"color\",arrCol[2]);\n\n$(\".num3\").css(\"background-color\",arrCol[3]);\n$(\".num3\").css(\"color\",arrCol[3]);\n$(\".num3-1\").css(\"color\",arrCol[3]);\n\n$(\".num4\").css(\"background-color\",arrCol[4]);\n$(\".num4\").css(\"color\",arrCol[4]);\n$(\".num4-1\").css(\"color\",arrCol[4]);\n\n$(\".num5\").css(\"background-color\",arrCol[5]);\n$(\".num5\").css(\"color\",arrCol[5]);\n$(\".num5-1\").css(\"color\",arrCol[5]);\n\n$(\".num6\").css(\"background-color\",arrCol[6]);\n$(\".num6\").css(\"color\",arrCol[6]);\n$(\".num6-1\").css(\"color\",arrCol[6]);\n\n$(\".num7\").css(\"background-color\",arrCol[7]);\n$(\".num7\").css(\"color\",arrCol[7]);\n$(\".num7-1\").css(\"color\",arrCol[7]);\n\n$(\".num8\").css(\"background-color\",arrCol[8]);\n$(\".num8\").css(\"color\",arrCol[8]);\n$(\".num8-1\").css(\"color\",arrCol[8]);\n\n$(\".num9\").css(\"background-color\",arrCol[9]);\n$(\".num9\").css(\"color\",arrCol[9]);\n$(\".num9-1\").css(\"color\",arrCol[9]);\n				 		\n				 		/*		\n				 		$(\".num1\").css(\"background-color\",\"rgb(175,13,102)\");\n				 		$(\".num1\").css(\"color\",\"rgb(175,13,102)\");\n\n				 		$(\".num2\").css(\"background-color\",\"rgb(146,248,70)\");\n				 		$(\".num2\").css(\"color\",\"rgb(146,248,70)\");\n\n				 		$(\".num3\").css(\"background-color\",\"rgb(255,200,47)\");\n				 		$(\".num3\").css(\"color\",\"rgb(255,200,47)\");\n\n				 		$(\".num4\").css(\"background-color\",\"rgb(255,118,0)\");\n				 		$(\".num4\").css(\"color\",\"rgb(255,118,0)\");\n\n				 		$(\".num5\").css(\"background-color\",\"rgb(255,152,213)\");\n				 		$(\".num5\").css(\"color\",\"rgb(255,152,213)\");\n\n				 		$(\".num6\").css(\"background-color\",\"rgb(235,235,222)\");\n				 		$(\".num6\").css(\"color\",\"rgb(235,235,222)\");\n\n				 		$(\".num7\").css(\"background-color\",\"rgb(100,100,100)\");\n				 		$(\".num7\").css(\"color\",\"rgb(100,100,100)\");\n\n				 		$(\".num8\").css(\"background-color\",\"rgb(255,255,0)\");\n				 		$(\".num8\").css(\"color\",\"rgb(255,255,0)\");\n\n				 		$(\".num9\").css(\"background-color\",\"rgb(255,255,150)\");\n				 		$(\".num9\").css(\"color\",\"rgb(255,255,150)\");\n				 		*/\n");
          }
        };
      })(this));

      /*
      		Create Config
      		_inputs = $('#myForm200 :input')
      		values = {}
      		@__salida = ""
      
      		_inputs.each (element, index) =>
      
      			#values[this.name] = $(this).val()
      			__val = $(index).val()
      			__id = $(index).attr('id')
      			__type = $(index).attr('type')
      
      			if ( __type == "text" or __type == "checkbox" ) and __type != "undefined" and __val !=""
      				if __type == "checkbox"
      					__val = false
      					if $("#"+__id).is(':checked') 
      						__val = true
      
      				console.log(__type+"|"+__id+"|"+__val)
      				@__salida += __type+"|"+__id+"|"+__val+"\n";
      
      
      		@__salida = @__salida.slice(0, -1)
      		$("#outputConfig").val(@__salida)
       */
      myUrl = window.location.href;
      seccion = myUrl.split("#");
      $("#mySp23").hide();
      if (seccion[1] === "multiSinestesia") {
        document.title = 'Emvm - Multiplicación Sinestésica';
        this.checkboxAction("quitar", "ch", 25);
        $("#ch18").prop('checked', true);
        $("#multiSinestesia").prop('checked', true);
        setTimeout(((function(_this) {
          return function() {
            return $("#boton-comenzar").trigger("click");
          };
        })(this)), 100);
      }
      if (seccion[1] === "silogismos") {
        document.title = 'Emvm - Silogismos';
        $("#div-help").hide();
        this.preventHelp = 1;
        this.checkboxAction("quitar", "ch", 25, 12);
        for (i = m = 0; m <= 25; i = ++m) {
          $("#mySp" + i).hide();
        }
        $("#mySp12").show();
      }
      if (seccion[1] === "logic") {
        document.title = 'Emvm - Logic';
        $("#div-help").hide();
        this.preventHelp = 1;
        this.checkboxAction("quitar", "ch", 25, 0);
        for (i = o = 0; o <= 25; i = ++o) {
          $("#mySp" + i).hide();
        }
        $("#mySp0").show();
        $("#mySp20").show();
      }
      if (seccion[1] === "matematica") {
        document.title = 'Emvm - Matemática';
        $("#div-help").hide();
        this.preventHelp = 1;
        this.checkboxAction("quitar", "ch", 25, 13);
        $("#ch17").prop('checked', true);
        $("#ch18").prop('checked', true);
        $("#ch19").prop('checked', true);
        $("#ch10").prop('checked', true);
        $("#ch20").prop('checked', true);
        $("#ch9").prop('checked', true);
        $("#ch21").prop('checked', true);
        $("#ch22").prop('checked', true);
        $("#ch23").prop('checked', true);
        $("#ch24").prop('checked', true);
        $("#ch25").prop('checked', true);
        for (i = p = 0; p <= 23; i = ++p) {
          $("#mySp" + i).hide();
        }
        $("#mySp10").show();
        $("#mySp13").show();
        $("#mySp17").show();
        $("#mySp18").show();
        $("#mySp19").show();
        $("#mySp21").show();
        $("#mySp9").show();
        $("#mySp22").show();
        $("#mySp23").show();
        $("#mySp25").show();
      }
      $("#contadorMR").html(this.contadorMR);
      $('#basic-modal-content').hide();
      this.iniciarBin();
      this.selectedMRAccion = 0;
      this.iniciarMR();
      $("#guardarMRBin").click((function(_this) {
        return function() {
          var q, save, t, txt;
          for (i = q = 0; q <= 7; i = ++q) {
            txt = $("#binMR" + i).val();
            if (txt.length === 0) {
              alert("Debe completar todos los campos");
              return;
            }
          }
          save = "";
          for (i = t = 0; t <= 7; i = ++t) {
            txt = $("#binMR" + i).val();
            save += txt;
            save += "|";
          }
          save = save.substring(0, save.length - 1);
          $.cookie('initBin', save, {
            expires: 14
          });
          console.log(save);
          return _this.iniciarBin();
        };
      })(this));
      $("#contadorMR").click((function(_this) {
        return function() {
          _this.contadorMR = 0;
          return $("#contadorMR").html(_this.contadorMR);
        };
      })(this));
      $("#controlesMR1").hide();
      $("#nextMR").click((function(_this) {
        return function() {
          $("#controlesMR1").hide();
          return $("#screen").html("");
        };
      })(this));
      $('#verifyMR').msgbox({
        content: 'jqueryscript.net',
        padding: 12
      });
      $("#verifyMR").click((function(_this) {
        return function() {
          return _this.goMR(2);
        };
      })(this));
      $("#goMR").click((function(_this) {
        return function() {
          _this.contadorMR++;
          $("#contadorMR").html(_this.contadorMR);
          $("#div-help").hide();
          $("#div-configurar").hide();
          return _this.goMR(0);
        };
      })(this));
      $("#checkMR").click((function(_this) {
        return function() {
          $("#div-help").hide();
          if ($("#fastMode").is(':checked')) {
            return _this.goMR(1);
          } else {
            _this.checkMR();
            return $("#controlesMR1").show();
          }
        };
      })(this));
      $('#abrirMR').change((function(_this) {
        return function() {
          _this.abrirMR();
          return _this.configurarMR();
        };
      })(this));
      $("#borrarMR").click((function(_this) {
        return function() {
          var arrayAux, auxTodasConfiguracionesMR, k, q, ref, ref1, save, select, t;
          if (_this.todasConfiguracionesMR.length === 1) {
            return;
          }
          select = parseInt($("#abrirMR").val());
          if (select === 0) {
            return;
          }
          save = "";
          auxTodasConfiguracionesMR = [];
          for (i = q = 0, ref = _this.todasConfiguracionesMR.length - 1; 0 <= ref ? q <= ref : q >= ref; i = 0 <= ref ? ++q : --q) {
            if (i !== select) {
              save += _this.todasConfiguracionesMR[i][0] + "*" + _this.todasConfiguracionesMR[i][1] + "*" + _this.todasConfiguracionesMR[i][2] + "*" + _this.todasConfiguracionesMR[i][3] + "*";
              for (k = t = 0, ref1 = _this.todasConfiguracionesMR[i][4].length - 1; 0 <= ref1 ? t <= ref1 : t >= ref1; k = 0 <= ref1 ? ++t : --t) {
                arrayAux = [];
                arrayAux = _this.todasConfiguracionesMR[i][4][k];
                save += (parseInt(arrayAux[0])) + " " + (parseInt(arrayAux[1])) + " " + (parseInt(arrayAux[2]));
                save += "-";
              }
              save = save.substring(0, save.length - 1);
              save += "|";
            }
          }
          save = save.substring(0, save.length - 1);
          _this.todasConfiguracionesMR = [];
          _this.matrizMRConfiguracion = [];
          $.cookie('initMR', save, {
            expires: 14
          });
          $("#tiempoMR").val("500");
          $("#digitosMR").val("6");
          _this.selectedMRAccion = 0;
          return _this.iniciarMR();
        };
      })(this));
      $("#borrarTodoMR").click((function(_this) {
        return function() {
          if (_this.todasConfiguracionesMR.length === 1) {
            return;
          }
          if (confirm('Estás seguro que quieres borrar las configuraciones?')) {
            $.removeCookie("initMR");
            _this.todasConfiguracionesMR = [];
            _this.matrizMRConfiguracion = [];
            $("#tiempoMR").val("500");
            $("#digitosMR").val("6");
            $('#tipoMR option[value=0]').attr('selected', 'selected');
            return _this.iniciarMR();
          }
        };
      })(this));
      $('#guardarMR').click((function(_this) {
        return function() {
          var arrayAux, j, k, nombre, q, ref, ref1, ref2, ref3, ref4, ref5, save, seleccionado, select, t, u, v, w, y;
          select = parseInt($("#abrirMR").val());
          save = "";
          seleccionado = 0;
          if (select === 0) {
            for (i = q = 0, ref = _this.todasConfiguracionesMR.length - 1; 0 <= ref ? q <= ref : q >= ref; i = 0 <= ref ? ++q : --q) {
              save += _this.todasConfiguracionesMR[i][0] + "*" + _this.todasConfiguracionesMR[i][1] + "*" + _this.todasConfiguracionesMR[i][2] + "*" + _this.todasConfiguracionesMR[i][3] + "*";
              for (k = t = 0, ref1 = _this.todasConfiguracionesMR[i][4].length - 1; 0 <= ref1 ? t <= ref1 : t >= ref1; k = 0 <= ref1 ? ++t : --t) {
                arrayAux = [];
                arrayAux = _this.todasConfiguracionesMR[i][4][k];
                save += (parseInt(arrayAux[0])) + " " + (parseInt(arrayAux[1])) + " " + (parseInt(arrayAux[2]));
                save += "-";
              }
              save = save.substring(0, save.length - 1);
              save += "|";
            }
            nombre = prompt("Enter namme", "");
            save += nombre + "*" + $("#tipoMR").val() + "*" + $("#tiempoMR").val() + "*" + $("#digitosMR").val() + "*";
            for (i = u = 0, ref2 = $("#digitosMR").val() - 1; 0 <= ref2 ? u <= ref2 : u >= ref2; i = 0 <= ref2 ? ++u : --u) {
              save += (parseInt(_this.matrizMRConfiguracion[i][0])) + " " + (parseInt(_this.matrizMRConfiguracion[i][1])) + " " + _this.matrizMRConfiguracion[i][2];
              save += "-";
            }
            save = save.substring(0, save.length - 1);
            seleccionado = _this.todasConfiguracionesMR.length;
          } else {
            seleccionado = select;
            for (i = v = 0, ref3 = _this.todasConfiguracionesMR.length - 1; 0 <= ref3 ? v <= ref3 : v >= ref3; i = 0 <= ref3 ? ++v : --v) {
              if (i === select) {
                save += _this.todasConfiguracionesMR[i][0] + "*" + $("#tipoMR").val() + "*" + $("#tiempoMR").val() + "*" + $("#digitosMR").val() + "*";
                for (j = w = 0, ref4 = $("#digitosMR").val() - 1; 0 <= ref4 ? w <= ref4 : w >= ref4; j = 0 <= ref4 ? ++w : --w) {
                  save += (parseInt(_this.matrizMRConfiguracion[j][0])) + " " + (parseInt(_this.matrizMRConfiguracion[j][1])) + " " + _this.matrizMRConfiguracion[j][2];
                  save += "-";
                }
                save = save.substring(0, save.length - 1);
              } else {
                save += _this.todasConfiguracionesMR[i][0] + "*" + _this.todasConfiguracionesMR[i][1] + "*" + _this.todasConfiguracionesMR[i][2] + "*" + _this.todasConfiguracionesMR[i][3] + "*";
                for (k = y = 0, ref5 = _this.todasConfiguracionesMR[i][4].length - 1; 0 <= ref5 ? y <= ref5 : y >= ref5; k = 0 <= ref5 ? ++y : --y) {
                  arrayAux = [];
                  arrayAux = _this.todasConfiguracionesMR[i][4][k];
                  save += (parseInt(arrayAux[0])) + " " + (parseInt(arrayAux[1])) + " " + (parseInt(arrayAux[2]));
                  save += "-";
                }
                save = save.substring(0, save.length - 1);
              }
              save += "|";
            }
            save = save.substring(0, save.length - 1);
          }
          $.cookie('initMR', save, {
            expires: 14
          });
          _this.selectedMRAccion = seleccionado;
          _this.todasConfiguracionesMR = [];
          _this.matrizMRConfiguracion = [];
          _this.cargarMR();
          _this.abrirMR();
          return _this.configurarMR();
        };
      })(this));
      $('#unselectMR').click((function(_this) {
        return function() {
          _this.matrizSeleccionMR = [];
          $("#seleccionMR").val("");
          return $("#siguienteMR").val("");
        };
      })(this));
      $('#addMR').click((function(_this) {
        return function() {
          var aux;
          aux = parseInt($("#movimientoMR").val());
          aux += 1;
          return $("#movimientoMR").val(aux);
        };
      })(this));
      $('#restMR').click((function(_this) {
        return function() {
          var aux;
          aux = parseInt($("#movimientoMR").val());
          if (aux !== 0) {
            aux -= 1;
          }
          return $("#movimientoMR").val(aux);
        };
      })(this));
      $('#upMR').click((function(_this) {
        return function() {
          var aux, q, ref;
          aux = parseInt($("#movimientoMR").val());
          for (i = q = 0, ref = _this.matrizSeleccionMR.length - 1; 0 <= ref ? q <= ref : q >= ref; i = 0 <= ref ? ++q : --q) {
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][1] -= aux;
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][3] = 1;
          }
          return _this.configurarMR();
        };
      })(this));
      $('#downMR').click((function(_this) {
        return function() {
          var aux, q, ref;
          aux = parseInt($("#movimientoMR").val());
          for (i = q = 0, ref = _this.matrizSeleccionMR.length - 1; 0 <= ref ? q <= ref : q >= ref; i = 0 <= ref ? ++q : --q) {
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][1] += aux;
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][3] = 1;
          }
          return _this.configurarMR();
        };
      })(this));
      $('#leftMR').click((function(_this) {
        return function() {
          var aux, q, ref;
          aux = parseInt($("#movimientoMR").val());
          for (i = q = 0, ref = _this.matrizSeleccionMR.length - 1; 0 <= ref ? q <= ref : q >= ref; i = 0 <= ref ? ++q : --q) {
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][0] -= aux;
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][3] = 1;
          }
          return _this.configurarMR();
        };
      })(this));
      $('#rightMR').click((function(_this) {
        return function() {
          var aux, q, ref;
          aux = parseInt($("#movimientoMR").val());
          for (i = q = 0, ref = _this.matrizSeleccionMR.length - 1; 0 <= ref ? q <= ref : q >= ref; i = 0 <= ref ? ++q : --q) {
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][0] += aux;
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][3] = 1;
          }
          return _this.configurarMR();
        };
      })(this));
      $('#restaDigitosMR').click((function(_this) {
        return function() {
          var aux;
          aux = parseInt($("#digitosMR").val());
          aux -= 1;
          $("#digitosMR").val(aux);
          return _this.configurarMR();
        };
      })(this));
      $('#sumaDigitosMR').click((function(_this) {
        return function() {
          var aux;
          aux = parseInt($("#digitosMR").val());
          aux += 1;
          $("#digitosMR").val(aux);
          return _this.configurarMR();
        };
      })(this));
      $('#digitosMR').change((function(_this) {
        return function() {
          return _this.configurarMR();
        };
      })(this));
      $('#tipoMR').change((function(_this) {
        return function() {
          _this.matrizMRConfiguracion = [];
          _this.matrizSeleccionMR = [];
          $("#seleccionMR").val("");
          $("#siguienteMR").val("");
          return _this.configurarMR();
        };
      })(this));
      $('#siguienteMR').change((function(_this) {
        return function() {
          var aux, q, ref;
          aux = parseInt($("#siguienteMR").val());
          for (i = q = 0, ref = _this.matrizSeleccionMR.length - 1; 0 <= ref ? q <= ref : q >= ref; i = 0 <= ref ? ++q : --q) {
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][2] = aux;
            _this.matrizMRConfiguracion[_this.matrizSeleccionMR[i]][4] = 1;
          }
          return _this.configurarMR();
        };
      })(this));
      $("#frase").html("<br>" + window.frases[_.random(0, 2)]);
      $("#footer").hide();
      $("#timer").hide();
      ua = navigator.userAgent.toLowerCase();
      isAndroid = 0;
      isiPad = 0;
      isiPhone = 0;
      isAndroid = ua.indexOf('android') > -1;
      isiPad = navigator.userAgent.match(/iPad/i) !== null;
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
        isiPhone = 1;
      }
      if (window.screen.availWidth === 320) {
        $("#controles1").css("zoom", "400%");
        $("#controles2").css("zoom", "400%");
        $("#controles3").css("zoom", "400%");
        $("#screen").css("zoom", "400%");
        $("#fastMode1").prop('checked', true);
        $("#fastMode1").attr("disabled", true);
      }
      document.body.style.zoom = this.myZoom;
      if (window.screen.availWidth < 1000 || isAndroid || isiPad || isiPhone) {
        this.esMobil = 1;
        $("#guia").hide();
        $("#footer").show();
        $("#margen-help").hide();
        $("#periY").val("5");
        this.restaYMR = 200;
        $('#myForm200 :input').css("zoom", "200%");

        /*
        			$("#navegar").css("font-size","200%")
        			$("#boton-comenzar").css("font-size","200%")
        			$("#boton-conf").css("font-size","200%")
        
        			#$("#screen").css("font-size","250%")
        
        			if window.screen.availWidth > 1000 or window.screen.availWidth > 1000
        				$("#screen").css("zoom","250%")
        				$("#screen").css("zoom","250%")
         */
        this.esMovil = 1;
      }
      if (window.screen.availWidth === 2560) {
        this.restaYMR = 0;
        this.myZoom = "400%";
      }
      for (xx = q = 0, ref = this.totalEjercicios; 0 <= ref ? q <= ref : q >= ref; xx = 0 <= ref ? ++q : --q) {
        eval("$(\"#a" + xx + "\").click(function(){window.juegoReaction.checkboxAction(\"quitar\", \"ch\", window.juegoReaction.totalEjercicios, " + xx + "); }) ");
      }
      for (xx = t = 0, ref1 = this.totalEjerciciosMemoria - 1; 0 <= ref1 ? t <= ref1 : t >= ref1; xx = 0 <= ref1 ? ++t : --t) {
        eval("$(\"#aa" + xx + "\").click(function(){window.juegoReaction.checkboxAction(\"quitar\", \"mm\", window.juegoReaction.totalEjercicios, " + xx + "); }) ");
      }
      $("#aab7").click((function(_this) {
        return function() {
          return _this.checkboxAction("quitar", "ch", window.juegoReaction.totalEjercicios, 7);
        };
      })(this));
      $("#all").click((function(_this) {
        return function() {
          return _this.checkboxAction("all", "ch", _this.totalEjercicios, 0);
        };
      })(this));
      $("#all3").click((function(_this) {
        return function() {
          return _this.checkboxAction("all", "ch", _this.totalEjercicios, 0);
        };
      })(this));
      $("#random").click((function(_this) {
        return function() {
          return _this.checkboxAction("random", "ch", _this.totalEjercicios, 0);
        };
      })(this));
      $("#random3").click((function(_this) {
        return function() {
          return _this.checkboxAction("random", "ch", _this.totalEjercicios, 10000);
        };
      })(this));
      $("#all1").click((function(_this) {
        return function() {
          return _this.checkboxAction("all", "mm", _this.totalEjercicios, 0);
        };
      })(this));
      $("#random1").click((function(_this) {
        return function() {
          return _this.checkboxAction("random", "mm", _this.totalEjercicios, 0);
        };
      })(this));
      $("#help").click((function(_this) {
        return function() {
          return $("#div-help").show();
        };
      })(this));
      this.totalPasadas = $("#cantPasadas").val();
      $("#div-configurar").hide();
      $("#hola").html("hola");
      $("#boton-conf").click((function(_this) {
        return function() {
          $("#screen").html("");
          $("#controlesMR1").hide();
          if ($("#div-configurar").is(':visible')) {
            location.hash = "#top";
            return $("#div-configurar").hide();
          } else {
            location.hash = "#configurar-anchor";
            return $("#div-configurar").show();
          }
        };
      })(this));
      $("#boton-conf-sumFlash").click((function(_this) {
        return function() {
          $("#screen").html("");
          $("#controlesMR1").hide();
          if ($("#div-configurar").is(':visible')) {
            $("#div-configurar").hide();
          } else {
            $("#div-configurar").show();
          }
          return location.hash = '#sum-flash-config';
        };
      })(this));
      $("#ok").html(this.aciertos);
      $("#no").html(this.errores);
      $("#pasadas").html(this.totalPasadas);
      $("#boton-comenzar").click((function(_this) {
        return function() {
          clearTimeout(_this.killTimeout);
          clearTimeout(_this.killTimeout1);
          $("#resultados-div").hide();
          $(".clear-result-btn-class").hide();
          if (!_this.estado) {
            $("#controlesMR").hide();
            $("#boton-comenzar").attr('value', '■');
            _this.jugadas = 0;
            _this.configurarEjercicios();
            $("#div-help").hide();
            $("#controles2").hide();
            $("#liveHelp1").html("");
            _this.bMRGo = 0;
            if (_this.senglarMindMode) {
              _this.timeInitSenglarMindMode = Date.now();
            }
            return _this.iniciar();
          } else {
            _this.bMRGo = 1;
            $("#controlesMR").show();
            if (!_this.preventHelp) {
              $("#div-help").show();
            }
            $("#pasadas").html($("#cantPasadas").val());
            $("#ok").html("0");
            $("#no").html("0");
            clearTimeout(_this.killTimeout);
            clearTimeout(_this.killTimeout1);
            clearInterval(_this.killTimeout5);
            $("#controles2").show();
            $("#timer").hide();
            $("#liveHelp").html("");
            $("#liveHelp1").html("");
            $("#boton-comenzar").attr('value', '▶');
            _this.estado = 0;
            return _this.cls();
          }
        };
      })(this));
      $("#btn-z-id").click((function(_this) {
        return function() {
          if (_this.bMRGo) {
            _this.contadorMR++;
            $("#contadorMR").html(_this.contadorMR);
            $("#div-help").hide();
            $("#div-configurar").hide();
            return _this.goMR(0);
          } else {
            return _this.checkPosicion(true);
          }
        };
      })(this));
      $("#btn-x-id").click((function(_this) {
        return function() {
          if (_this.bMRGo) {
            $("#div-help").hide();
            if ($("#fastMode").is(':checked')) {
              return _this.goMR(1);
            } else {
              _this.checkMR();
              return $("#controlesMR1").show();
            }
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));

      /*
      		$(document).keypress (e) =>
      			alert(e.which)
       */
      $(document).keypress((function(_this) {
        return function(e) {
          if (_this.ejercicioSeleccionado !== 10) {
            console.log(e.which);
            if (e.which === 122) {
              _this.checkPosicion(true);
            }
            if (e.which === 120) {
              _this.checkPosicion(false);
            }
            if (e.which === 99) {
              if (!$("#question-1").is(":visible")) {
                $("#question-1").show();
                console.log("mostrar");
                return;
              }
              $(".salida-logic").show();
              $("#texto-ayuda-1").hide();
              $("#question-1").hide();
            }
            if (e.which === 97 && _this.ejercicioSeleccionado === 12) {
              _seeQ();
            }
          }
          if (_this.ejercicioSeleccionado === 10) {
            if (e.which === 100 || e.which === 49) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 0 ? "correcta" : "domingo") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[0]);
            }
            if (e.which === 108 || e.which === 50) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 1 ? "correcta" : "lunes") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[1]);
            }
            if (e.which === 109 || e.which === 51) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 2 ? "correcta" : "martes") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[2]);
            }
            if (e.which === 105 || e.which === 52) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 3 ? "correcta" : "miércoles") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[3]);
            }
            if (e.which === 106 || e.which === 53) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 4 ? "correcta" : "jueves") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[4]);
            }
            if (e.which === 118 || e.which === 54) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 5 ? "correcta" : "viernes") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[5]);
            }
            if (e.which === 115 || e.which === 55) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 6 ? "correcta" : "sábado") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[6]);
            }
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          }
          if (_this.ejercicioSeleccionado === 11) {
            if (e.which === 99) {
              _this.checkPosicion(_this.teclaNotas[0]);
            }
            if (e.which === 100) {
              _this.checkPosicion(_this.teclaNotas[1]);
            }
            if (e.which === 101) {
              _this.checkPosicion(_this.teclaNotas[2]);
            }
            if (e.which === 102) {
              _this.checkPosicion(_this.teclaNotas[3]);
            }
            if (e.which === 103) {
              _this.checkPosicion(_this.teclaNotas[4]);
            }
            if (e.which === 97) {
              _this.checkPosicion(_this.teclaNotas[5]);
            }
            if (e.which === 98) {
              _this.checkPosicion(_this.teclaNotas[6]);
            }
            return e.preventDefault();
          }
        };
      })(this));
    }

    motorReaction.prototype.iniciar = function() {
      var cantidadEjercicios, ejercicio, ejercicioAnterior, ir, m, ref, ref1, salir, zz;
      clearInterval(this.killTimeout7);
      this.nextQuestionDelay = 0;
      this.segundos = parseInt($("#tiempoPreparacion").val());
      document.body.style.zoom = this.myZoom;
      this.tipo = 0;
      $("#timer").hide();
      cantidadEjercicios = this.ejerciciosActivos.length;
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      ejercicioAnterior = this.ejercicioSeleccionado;
      while (true) {
        while (true) {
          ejercicio = this.ejerciciosActivos[_.random(0, cantidadEjercicios - 1)];
          this.ejercicioSeleccionado = ejercicio;
          if (cantidadEjercicios >= 3 && ejercicioAnterior === ejercicio) {
            continue;
          }
          if (!(this.preventCalendar && ejercicio === 10)) {
            break;
          }
        }
        if (ejercicio === 7 && cantidadEjercicios !== 1) {
          ir = this.jugadas - parseInt($("#unoDeCada").val());
          salir = 1;
          for (zz = m = ref = this.jugadas, ref1 = ir > 0 ? ir : 0; ref <= ref1 ? m <= ref1 : m >= ref1; zz = ref <= ref1 ? ++m : --m) {
            if (this.ejerciciosAnteriores[zz] === 7) {
              salir = 0;
              continue;
            }
          }
          if (salir) {
            break;
          }
        } else {
          break;
        }
      }
      if (this.jugadas === 0 && this.tieneMemoria === 1) {
        this.memoria();
        this.ejercicioSeleccionado = 5;
        this.ejerciciosAnteriores[this.jugadas] = ejercicio;
        return;
      }
      this.ejerciciosAnteriores[this.jugadas] = ejercicio;
      if (this.bCantidadPasadasCalendar) {
        ejercicio = 10;
        this.ejercicioSeleccionado = ejercicio;
        this.calendario();
        this.contadorCantidadPasadasCalendar++;
        if (this.contadorCantidadPasadasCalendar === this.cantidadPasadasCalendar) {
          this.bCantidadPasadasCalendar = 0;
          this.preventCalendar = 1;
        }
        return;
      }
      this.bMemoria2 = 0;
      switch (ejercicio) {
        case 0:
          this.logica(0);
          break;
        case 1:
          this.aritmetica();
          break;
        case 2:
          this.periferica();
          break;
        case 3:
          this.binarios();
          break;
        case 4:
          this.sinestesia();
          break;
        case 5:
          this.memoria();
          break;
        case 6:
          this.tsr();
          break;
        case 7:
          this.countMemoria2 = 1;
          this.bMemoria2 = 1;
          this.memoria2();
          break;
        case 8:
          this.ojos();
          break;
        case 9:
          this.nextQuestionDelay = 2000;
          this.sumFlash();
          break;
        case 10:
          this.cantidadPasadasCalendar = parseInt($("#cantidadPasadasCalendar").val());
          this.contadorCantidadPasadasCalendar = 1;
          if (this.cantidadPasadasCalendar > 1) {
            this.bCantidadPasadasCalendar = 1;
          } else {
            this.bCantidadPasadasCalendar = 0;
          }
          this.calendario();
          break;
        case 11:
          this.clef();
          break;
        case 12:
          this.silogismos();
          break;
        case 13:
          setTimeout(((function(_this) {
            return function() {
              return _this.hectoc();
            };
          })(this)), 10);
          break;
        case 14:
          this.laberinto();
          break;
        case 15:
          this.logica(1);
          break;
        case 16:
          this.logica(2);
          break;
        case 17:
          setTimeout(((function(_this) {
            return function() {
              return _this.suma();
            };
          })(this)), 10);
          break;
        case 18:
          setTimeout(((function(_this) {
            return function() {
              return _this.multiplicacion();
            };
          })(this)), 10);
          break;
        case 19:
          setTimeout(((function(_this) {
            return function() {
              return _this.suma100();
            };
          })(this)), 10);
          break;
        case 20:
          setTimeout(((function(_this) {
            return function() {
              return _this.resta();
            };
          })(this)), 10);
          break;
        case 21:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(2);
            };
          })(this)), 10);
          break;
        case 22:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(3);
            };
          })(this)), 10);
          break;
        case 23:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(4);
            };
          })(this)), 10);
          break;
        case 24:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(5);
            };
          })(this)), 10);
          break;
        case 25:
          setTimeout(((function(_this) {
            return function() {
              return _this.raiz();
            };
          })(this)), 10);
          break;
        default:
          alert();
      }
      return this.preventCalendar = 0;
    };

    motorReaction.prototype.cargarConfiguracionTotal = function() {
      var aTxt, aTxt1, dom, err, i, m, ref, txt, val;
      aTxt = this.configApp.split("\n");
      for (i = m = 0, ref = aTxt.length - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
        txt = aTxt[i];
        aTxt1 = txt.split("|");
        if (aTxt1[0] === "checkbox") {
          val = false;
          if (aTxt1[2] === "true") {
            val = true;
          }
          try {
            dom = "#" + aTxt1[1];
            $().prop('checked', val);
          } catch (_error) {
            err = _error;
            console.log("E");
          }
        } else {
          try {
            dom = "#" + aTxt1[1];
            $(dom).val(aTxt1[2]);
          } catch (_error) {
            err = _error;
            console.log("E");
          }
        }
      }
      window.arrCol = [$("#txt0").val(), $("#txt1").val(), $("#txt2").val(), $("#txt3").val(), $("#txt4").val(), $("#txt5").val(), $("#txt6").val(), $("#txt7").val(), $("#txt8").val(), $("#txt9").val()];
      return console.log("cargarconf");
    };

    motorReaction.prototype.iniciarBin = function() {
      var arrayBase, arrayBase1, i, j, k, m, myCookie, ref, results, save, str, txt;
      myCookie = $.cookie('initBin');
      if (!(myCookie != null)) {
        save = "r|t d|f|n|c k|l|s z|m";
        $.cookie('initBin', save, {
          expires: 14
        });
        this.iniciarBin();
        return;
      }
      k = 0;
      arrayBase = [];
      arrayBase1 = [];
      arrayBase = myCookie.split("|");
      results = [];
      for (i = m = 0, ref = arrayBase.length - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
        this.arrayMRBin[i] = [];
        txt = arrayBase[i];
        arrayBase1 = txt.split(" ");
        $("#binMR" + i).val(txt);
        results.push((function() {
          var o, ref1, results1;
          results1 = [];
          for (j = o = 0, ref1 = arrayBase1.length - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
            str = arrayBase1[j] + " ";
            results1.push(this.arrayMRBin[i][j] = str.charCodeAt(0));
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    motorReaction.prototype.checkMR = function() {
      var auxSuma, auxTxt, color, emptyColumBin, emptyColumns, emptyColumsDec, emptyColumsLetters, fModif, fPossible, finL, i, iSpace, ii, imprimir, inicioCuadro, j, jSpace, jj, k, l, m, mResta, maxColumnsBin, maxColumnsDec, maxColumnsLetters, myX, myY, o, p, poner, ponerPossible, possible, possible1, possible2, possible3, q, ref, t, txt;
      console.log("_");
      for (i = m = 0, ref = this.digitosMRGo - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
        if (this.tipoMRGo === 2) {
          this.resultadosMRGo[i] = $("#respuestaMRId" + i).val();
        } else {
          this.resultadosMRGo[i] = parseInt($("#respuestaMRId" + i).val());
        }
      }
      emptyColumsDec = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      emptyColumBin = [3, 6, 9, 12, 15, 18];
      emptyColumsLetters = [2, 4, 7, 12, 13, 16, 19, 22, 25, 28];
      possible = "abcdefghijklmnopqrstuvwxyz";
      txt = possible.charAt(_.random(0, possible.length - 1));
      possible1 = "0123456789";
      possible2 = "101010";
      possible3 = "010101";
      maxColumnsDec = 22;
      maxColumnsBin = 21;
      maxColumnsLetters = 22;
      iSpace = 30;
      jSpace = 30;
      imprimir = "";
      inicioCuadro = $("#screen").position();
      inicioCuadro = inicioCuadro.top;
      if (this.tipoMRGo === 0) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible1;
        finL = 10;
      }
      if (this.tipoMRGo === 1) {
        emptyColumns = emptyColumBin;
        ponerPossible = possible2;
        finL = 5;
      }
      if (this.tipoMRGo === 2) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible;
        finL = 26;
      }
      l = 0;
      if (this.tipoMRGo === 0 || this.tipoMRGo === 2) {
        k = 0;
        for (i = o = 0; o <= 20; i = ++o) {
          auxSuma = 0;
          for (j = p = 0; p <= 19; j = ++p) {
            if (l === finL) {
              l = 0;
            }
            if (k < this.digitosMRGo) {
              if (!(this.matrizMRConfiguracionGo[k] != null)) {
                this.matrizMRConfiguracionGo[k] = [];
              }
              if (_.find(emptyColumns, (function(_this) {
                return function(num) {
                  return num === j;
                };
              })(this))) {
                auxSuma += jSpace;
              }
              myX = 20 + j * jSpace + auxSuma;
              myY = inicioCuadro + i * iSpace;
              if (parseInt(this.matrizMRConfiguracionGo[k][4]) === 1) {
                this.matrizMRConfiguracionGo[k][2];
              } else {
                this.matrizMRConfiguracionGo[k][2] = k + 1;
                this.matrizMRConfiguracionGo[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracionGo[k][3]) === 1) {
                myX = this.matrizMRConfiguracionGo[k][0];
                myY = this.matrizMRConfiguracionGo[k][1];
              } else {
                this.matrizMRConfiguracionGo[k][3] = 0;
                this.matrizMRConfiguracionGo[k][0] = myX;
                this.matrizMRConfiguracionGo[k][1] = myY;
              }
              color = "red";
              poner = this.resultadosMRGo[k];
              if (isNaN(this.resultadosMRGo[k])) {
                poner = "-";
              } else {
                if (parseInt(this.matrizMRConfiguracionGo[k][5]) === parseInt(this.resultadosMRGo[k])) {
                  color = "green";
                }
              }
              if (this.tipoMRGo === 2) {
                auxTxt = this.resultadosMRGo[k];
                if (auxTxt.length === 0) {
                  poner = "-";
                } else {
                  poner = this.resultadosMRGo[k];
                }
                if (this.matrizMRConfiguracionGo[k][5] === this.resultadosMRGo[k]) {
                  color = "green";
                }
              }
              imprimir += "<div class=\"element\" id=\"myElementGo" + k + "\"  style=\"margin-left: " + myX + "px; top: " + (myY - (100 + this.restaYMR)) + "px;\"> 					\n		<b> <font color=\"" + color + "\">" + poner + "  </font> </b>\n</div>	";
              k++;
              l++;
            } else {
              break;
            }
          }
          if (k > this.digitosMRGo) {
            break;
          }
        }
      }
      if (this.tipoMRGo === 1) {
        k = 0;
        fPossible = 1;
        mResta = 1;
        ii = 0;
        jj = 0;
        for (i = q = 0; q <= 4; i = ++q) {
          auxSuma = 0;
          mResta = 1;
          jj = 0;
          fModif = 1;
          for (j = t = 0; t <= 41; j = ++t) {
            if (k < this.digitosMRGo) {
              if (!(this.matrizMRConfiguracionGo[k] != null)) {
                this.matrizMRConfiguracionGo[k] = [];
              }
              if (k % 6 === 0) {
                l = 0;
                if (fPossible) {
                  ponerPossible = possible2;
                  fPossible = 0;
                } else {
                  ponerPossible = possible3;
                  fPossible = 1;
                }
                if (j !== 0) {
                  auxSuma += jSpace;
                }
              }
              if (k % 3 === 0 && j !== 0) {
                if (fModif) {
                  fModif = 0;
                  ii++;
                  jj -= 3;
                } else {
                  fModif = 1;
                  ii--;
                }
              }
              myX = 20 + jj * jSpace + auxSuma;
              myY = inicioCuadro + ii * iSpace;
              if (parseInt(this.matrizMRConfiguracionGo[k][4]) === 1) {
                this.matrizMRConfiguracionGo[k][2];
              } else {
                this.matrizMRConfiguracionGo[k][2] = k + 1;
                this.matrizMRConfiguracionGo[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracionGo[k][3]) === 1) {
                myX = this.matrizMRConfiguracionGo[k][0];
                myY = this.matrizMRConfiguracionGo[k][1];
              } else {
                this.matrizMRConfiguracionGo[k][3] = 0;
                this.matrizMRConfiguracionGo[k][0] = myX;
                this.matrizMRConfiguracionGo[k][1] = myY;
              }
              color = "red";
              poner = this.resultadosMRGo[k];
              if (isNaN(this.resultadosMRGo[k])) {
                poner = "-";
              } else {
                if (parseInt(this.matrizMRConfiguracionGo[k][5]) === this.resultadosMRGo[k]) {
                  color = "green";
                }
              }
              imprimir += "<div class=\"element\" id=\"myElementGo" + k + "\"  style=\"margin-left: " + myX + "px; top: " + (myY - (100 + this.restaYMR)) + "px;\"> 					\n		<b> <font color=\"" + color + "\">" + poner + "  </font> </b>\n</div>	";
              k++;
              l++;
              jj++;
            } else {
              break;
            }
          }
          ii += 1;
          if (k > this.digitosMRGo) {
            break;
          }
        }
      }
      return $("#screen").html(imprimir);
    };

    motorReaction.prototype.respuestaMR = function() {
      var auxSuma, emptyColumBin, emptyColumns, emptyColumsDec, emptyColumsLetters, fModif, fPossible, finL, i, iSpace, ii, imprimir, inicioCuadro, j, jSpace, jj, k, l, m, mResta, maxColumnsBin, maxColumnsDec, maxColumnsLetters, myX, myY, o, p, ponerPossible, possible, possible1, possible2, possible3, q, ref, results, siguiente, t, txt, x;
      emptyColumsDec = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      emptyColumBin = [3, 6, 9, 12, 15, 18];
      emptyColumsLetters = [2, 4, 7, 12, 13, 16, 19, 22, 25, 28];
      possible = "abcdefghijklmnopqrstuvwxyz";
      txt = possible.charAt(_.random(0, possible.length - 1));
      possible1 = "0123456789";
      possible2 = "101010";
      possible3 = "010101";
      maxColumnsDec = 22;
      maxColumnsBin = 21;
      maxColumnsLetters = 22;
      iSpace = 30;
      jSpace = 30;
      imprimir = "";
      inicioCuadro = $("#screen").position();
      inicioCuadro = inicioCuadro.top;
      if (this.tipoMRGo === 0) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible1;
        finL = 10;
      }
      if (this.tipoMRGo === 1) {
        emptyColumns = emptyColumBin;
        ponerPossible = possible2;
        finL = 5;
      }
      if (this.tipoMRGo === 2) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible;
        finL = 26;
      }
      l = 0;
      if (this.tipoMRGo === 0 || this.tipoMRGo === 2) {
        k = 0;
        for (i = m = 0; m <= 20; i = ++m) {
          auxSuma = 0;
          for (j = o = 0; o <= 19; j = ++o) {
            if (l === finL) {
              l = 0;
            }
            if (k < this.digitosMRGo) {
              if (!(this.matrizMRConfiguracionGo[k] != null)) {
                this.matrizMRConfiguracionGo[k] = [];
              }
              if (_.find(emptyColumns, (function(_this) {
                return function(num) {
                  return num === j;
                };
              })(this))) {
                auxSuma += jSpace;
              }
              myX = 20 + j * jSpace + auxSuma;
              myY = inicioCuadro + i * iSpace;
              if (parseInt(this.matrizMRConfiguracionGo[k][4]) === 1) {
                this.matrizMRConfiguracionGo[k][2];
              } else {
                this.matrizMRConfiguracionGo[k][2] = k + 1;
                this.matrizMRConfiguracionGo[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracionGo[k][3]) === 1) {
                myX = this.matrizMRConfiguracionGo[k][0];
                myY = this.matrizMRConfiguracionGo[k][1];
              } else {
                this.matrizMRConfiguracionGo[k][3] = 0;
                this.matrizMRConfiguracionGo[k][0] = myX;
                this.matrizMRConfiguracionGo[k][1] = myY;
              }
              imprimir += "<div class=\"element\" id=\"myElementGo" + k + "\"  style=\"margin-left: " + myX + "px; top: " + (myY - (100 + this.restaYMR)) + "px;\"> 					\n		<input type=\"text\" name=\"respuestaMR" + k + "\" value=\"\" style=\"width:20px\" id=\"respuestaMRId" + k + "\">\n</div>	";
              k++;
              l++;
            } else {
              break;
            }
          }
          if (k > this.digitosMRGo) {
            break;
          }
        }
      }
      if (this.tipoMRGo === 1) {
        k = 0;
        fPossible = 1;
        mResta = 1;
        ii = 0;
        jj = 0;
        for (i = p = 0; p <= 4; i = ++p) {
          auxSuma = 0;
          mResta = 1;
          jj = 0;
          fModif = 1;
          for (j = q = 0; q <= 41; j = ++q) {
            if (k < this.digitosMRGo) {
              if (!(this.matrizMRConfiguracionGo[k] != null)) {
                this.matrizMRConfiguracionGo[k] = [];
              }
              if (k % 6 === 0) {
                l = 0;
                if (fPossible) {
                  ponerPossible = possible2;
                  fPossible = 0;
                } else {
                  ponerPossible = possible3;
                  fPossible = 1;
                }
                if (j !== 0) {
                  auxSuma += jSpace;
                }
              }
              if (k % 3 === 0 && j !== 0) {
                if (fModif) {
                  fModif = 0;
                  ii++;
                  jj -= 3;
                } else {
                  fModif = 1;
                  ii--;
                }
              }
              myX = 20 + jj * jSpace + auxSuma;
              myY = inicioCuadro + ii * iSpace;
              if (parseInt(this.matrizMRConfiguracionGo[k][4]) === 1) {
                this.matrizMRConfiguracionGo[k][2];
              } else {
                this.matrizMRConfiguracionGo[k][2] = k + 1;
                this.matrizMRConfiguracionGo[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracionGo[k][3]) === 1) {
                myX = this.matrizMRConfiguracionGo[k][0];
                myY = this.matrizMRConfiguracionGo[k][1];
              } else {
                this.matrizMRConfiguracionGo[k][3] = 0;
                this.matrizMRConfiguracionGo[k][0] = myX;
                this.matrizMRConfiguracionGo[k][1] = myY;
              }
              imprimir += "<div class=\"element\" id=\"myElementGo" + k + "\"  style=\"margin-left: " + myX + "px; top: " + (myY - (100 + this.restaYMR)) + "px;\"> \n	<input type=\"text\" name=\"respuestaMR{k}\" value=\"\"  style=\"width:20px\" id=\"respuestaMRId" + k + "\">\n</div>	";
              k++;
              l++;
              jj++;
            } else {
              break;
            }
          }
          ii += 1;
          if (k > this.digitosMRGo) {
            break;
          }
        }
      }
      $("#screen").html(imprimir);
      $("#respuestaMRId0").focus();
      results = [];
      for (x = t = 0, ref = this.digitosMRGo - 1; 0 <= ref ? t <= ref : t >= ref; x = 0 <= ref ? ++t : --t) {
        siguiente = this.matrizMRConfiguracionGo[x][2];
        results.push(eval("\n$(\"#respuestaMRId" + x + "\").keypress(function(event) {\n\n\n\n	binTxt = [\"000\", \"001\", \"010\", \"011\", \"100\", \"101\", \"110\", \"111\"]; \n	\n\n	if (window.juegoReaction.tipoMRGo == 1) {\n\n		for(i=0;i<8;i++){\n\n			for(j=0;j<window.juegoReaction.arrayMRBin[i].length;j++){\n\n				//console.log(window.juegoReaction.arrayMRBin[i][j]);\n\n				if (parseInt(event.which) == parseInt(window.juegoReaction.arrayMRBin[i][j])){\n\n					str = binTxt[i];\n\n		  							$(\"#respuestaMRId" + (x + 3) + "\").focus();\n\n		  							setTimeout(function(){\n\n					$(\"#respuestaMRId" + x + "\").val(str.charAt(0));\n		  							$(\"#respuestaMRId" + (x + 1) + "\").val(str.charAt(1));\n		  							$(\"#respuestaMRId" + (x + 2) + "\").val(str.charAt(2));\n\n\n\n		  							},50);\n	  							\n	  								return;\n\n\n				}\n\n			}\n\n		}\n\n	}\n\n		$(\"#respuestaMRId" + siguiente + "\").focus();\n\n	\n});"));
      }
      return results;
    };

    motorReaction.prototype.goMR = function(accion) {
      var arrayAux, auxSuma, emptyColumBin, emptyColumns, emptyColumsDec, emptyColumsLetters, fModif, fPossible, finL, i, iSpace, ii, imprimir, imprimir2, inicioCuadro, j, jSpace, jj, k, killTimeout1, l, m, mResta, maxColumnsBin, maxColumnsDec, maxColumnsLetters, menosY, myDivIdContent, myX, myY, o, p, ponerPossible, possible, possible1, possible2, q, ref, ref1, t, txt, u;
      emptyColumsDec = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      emptyColumBin = [3, 6, 9, 12, 15, 18];
      emptyColumsLetters = [2, 4, 7, 12, 13, 16, 19, 22, 25, 28];
      possible = "abcdefghijklmnopqrstuvwxyz";
      possible1 = "0123456789";
      possible2 = "10";
      maxColumnsDec = 22;
      maxColumnsBin = 21;
      maxColumnsLetters = 22;
      iSpace = 30;
      jSpace = 30;
      imprimir = "";
      imprimir2 = "";
      inicioCuadro = $("#screen").position();
      inicioCuadro = inicioCuadro.top;
      this.selectedMRAccion = parseInt($('#abrirMR1').val());
      k = 0;
      for (i = m = 0, ref = this.todasConfiguracionesMR.length - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
        if (i === parseInt($('#abrirMR1').val())) {
          this.tipoMRGo = parseInt(this.todasConfiguracionesMR[i][1]);
          this.tiempoMRGo = parseInt(this.todasConfiguracionesMR[i][2]);
          this.digitosMRGo = parseInt(this.todasConfiguracionesMR[i][3]);
          if (this.tipoMRGo === 0) {
            ponerPossible = possible1;
          }
          if (this.tipoMRGo === 1) {
            ponerPossible = possible2;
          }
          if (this.tipoMRGo === 2) {
            ponerPossible = possible;
          }
          for (j = o = 0, ref1 = this.todasConfiguracionesMR[i][4].length - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
            if (!accion) {
              this.matrizMRConfiguracionGo[k] = [];
            }
            arrayAux = [];
            arrayAux = this.todasConfiguracionesMR[i][4][j];
            this.matrizMRConfiguracionGo[k][0] = parseInt(arrayAux[0]);
            this.matrizMRConfiguracionGo[k][1] = parseInt(arrayAux[1]);
            this.matrizMRConfiguracionGo[k][2] = parseInt(arrayAux[2]);
            this.matrizMRConfiguracionGo[k][3] = 1;
            this.matrizMRConfiguracionGo[k][4] = 1;
            if (accion === 1 || accion === 2) {
              txt = this.matrizMRConfiguracionGo[k][5];
            } else {
              txt = ponerPossible.charAt(_.random(0, ponerPossible.length - 1));
            }
            this.matrizMRConfiguracionGo[k][5] = txt;
            k++;
          }
          break;
        }
      }
      if (this.tipoMRGo === 0) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible1;
        finL = 10;
      }
      if (this.tipoMRGo === 1) {
        emptyColumns = emptyColumBin;
        ponerPossible = possible2;
        finL = 5;
      }
      if (this.tipoMRGo === 2) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible;
        finL = 26;
      }
      l = 0;
      menosY = 100;
      if (accion === 2) {
        menosY = 250;
      }
      if (this.tipoMRGo === 0 || this.tipoMRGo === 2) {
        k = 0;
        for (i = p = 0; p <= 20; i = ++p) {
          auxSuma = 0;
          for (j = q = 0; q <= 19; j = ++q) {
            if (l === finL) {
              l = 0;
            }
            if (k < this.digitosMRGo) {
              if (!(this.matrizMRConfiguracionGo[k] != null)) {
                this.matrizMRConfiguracionGo[k] = [];
              }
              if (_.find(emptyColumns, (function(_this) {
                return function(num) {
                  return num === j;
                };
              })(this))) {
                auxSuma += jSpace;
              }
              myX = 20 + j * jSpace + auxSuma;
              myY = inicioCuadro + i * iSpace;
              if (parseInt(this.matrizMRConfiguracionGo[k][4]) === 1) {
                this.matrizMRConfiguracionGo[k][2];
              } else {
                this.matrizMRConfiguracionGo[k][2] = k + 1;
                this.matrizMRConfiguracionGo[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracionGo[k][3]) === 1) {
                myX = this.matrizMRConfiguracionGo[k][0];
                myY = this.matrizMRConfiguracionGo[k][1];
              } else {
                this.matrizMRConfiguracionGo[k][3] = 0;
                this.matrizMRConfiguracionGo[k][0] = myX;
                this.matrizMRConfiguracionGo[k][1] = myY;
              }
              imprimir += "<div class=\"element\" id=\"myElementGo" + k + "\"  style=\"margin-left: " + myX + "px; top: " + (myY - (menosY + this.restaYMR)) + "px;\"> 					\n		<b> " + this.matrizMRConfiguracionGo[k][5] + "  </b>\n</div>	";
              imprimir2 += this.matrizMRConfiguracionGo[k][5] + " - ";
              k++;
              l++;
            } else {
              break;
            }
          }
          if (k > this.digitosMRGo) {
            break;
          }
        }
      }
      if (this.tipoMRGo === 1) {
        k = 0;
        fPossible = 1;
        mResta = 1;
        ii = 0;
        jj = 0;
        for (i = t = 0; t <= 4; i = ++t) {
          auxSuma = 0;
          mResta = 1;
          jj = 0;
          fModif = 1;
          for (j = u = 0; u <= 41; j = ++u) {
            if (k < this.digitosMRGo) {
              if (!(this.matrizMRConfiguracionGo[k] != null)) {
                this.matrizMRConfiguracionGo[k] = [];
              }
              if (k % 6 === 0) {
                l = 0;
                if (fPossible) {
                  fPossible = 0;
                } else {
                  fPossible = 1;
                }
                if (j !== 0) {
                  auxSuma += jSpace;
                }
              }
              if (k % 3 === 0 && j !== 0) {
                if (fModif) {
                  fModif = 0;
                  ii++;
                  jj -= 3;
                } else {
                  fModif = 1;
                  ii--;
                }
              }
              myX = 20 + jj * jSpace + auxSuma;
              myY = inicioCuadro + ii * iSpace;
              if (parseInt(this.matrizMRConfiguracionGo[k][4]) === 1) {
                this.matrizMRConfiguracionGo[k][2];
              } else {
                this.matrizMRConfiguracionGo[k][2] = k + 1;
                this.matrizMRConfiguracionGo[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracionGo[k][3]) === 1) {
                myX = this.matrizMRConfiguracionGo[k][0];
                myY = this.matrizMRConfiguracionGo[k][1];
              } else {
                this.matrizMRConfiguracionGo[k][3] = 0;
                this.matrizMRConfiguracionGo[k][0] = myX;
                this.matrizMRConfiguracionGo[k][1] = myY;
              }
              imprimir += "<div class=\"element\" id=\"myElementGo" + k + "\"  style=\"margin-left: " + myX + "px; top: " + (myY - (menosY + this.restaYMR)) + "px;\"> \n	<b>" + this.matrizMRConfiguracionGo[k][5] + "</b>\n</div>	";
              imprimir2 += this.matrizMRConfiguracionGo[k][5] + " - ";
              k++;
              l++;
              jj++;
            } else {
              break;
            }
          }
          ii += 1;
          if (k > this.digitosMRGo) {
            break;
          }
        }
      }
      console.log(imprimir2);
      myDivIdContent = "#screen";
      if (accion === 2) {
        myDivIdContent = ".jMsgbox-loaded";
      }
      $("" + myDivIdContent).html(imprimir);
      if (accion === 0) {
        return killTimeout1 = setTimeout(((function(_this) {
          return function() {
            if ($("#fastMode").is(':checked')) {
              return $("#screen").html("");
            } else {
              $("#screen").html("");
              return killTimeout1 = setTimeout((function() {
                return _this.respuestaMR();
              }), 500);
            }
          };
        })(this)), this.tiempoMRGo);
      }
    };

    motorReaction.prototype.abrirMR = function() {
      var arrayAux, i, j, k, m, o, p, q, ref, ref1, ref2, ref3, results, select;
      this.matrizMRConfiguracion = [];
      this.selectedMRAccion = parseInt($('#abrirMR').val());
      k = 0;
      for (i = m = 0, ref = this.todasConfiguracionesMR.length - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
        if (i === parseInt($('#abrirMR').val())) {
          $('#tipoMR').val(this.todasConfiguracionesMR[i][1]);
          $('#tiempoMR').val(this.todasConfiguracionesMR[i][2]);
          $('#digitosMR').val(this.todasConfiguracionesMR[i][3]);
          for (j = o = 0, ref1 = this.todasConfiguracionesMR[i][4].length - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
            this.matrizMRConfiguracion[k] = [];
            arrayAux = [];
            arrayAux = this.todasConfiguracionesMR[i][4][j];
            this.matrizMRConfiguracion[k][0] = parseInt(arrayAux[0]);
            this.matrizMRConfiguracion[k][1] = parseInt(arrayAux[1]);
            this.matrizMRConfiguracion[k][2] = parseInt(arrayAux[2]);
            this.matrizMRConfiguracion[k][3] = 1;
            this.matrizMRConfiguracion[k][4] = 1;
            k++;
          }
          break;
        }
      }
      this.matrizSeleccionMR = [];
      $("#seleccionMR").val("");
      $("#siguienteMR").val("");
      $('#abrirMR').html('');
      for (i = p = 0, ref2 = this.todasConfiguracionesMR.length - 1; 0 <= ref2 ? p <= ref2 : p >= ref2; i = 0 <= ref2 ? ++p : --p) {
        select = "";
        if (i === this.selectedMRAccion) {
          select = "  selected";
        }
        $('#abrirMR').append("<option value=\"" + i + "\" " + select + ">" + this.todasConfiguracionesMR[i][0] + "</option>");
      }
      $('#abrirMR1').html('');
      results = [];
      for (i = q = 0, ref3 = this.todasConfiguracionesMR.length - 1; 0 <= ref3 ? q <= ref3 : q >= ref3; i = 0 <= ref3 ? ++q : --q) {
        select = "";
        if (i === 0) {
          select = "  selected";
        }
        results.push($('#abrirMR1').append("<option value=\"" + i + "\" " + select + ">" + this.todasConfiguracionesMR[i][0] + "</option>"));
      }
      return results;
    };

    motorReaction.prototype.iniciarMR = function() {
      var i, m, myCookie, ref, save, seleccionado;
      myCookie = $.cookie('initMR');
      this.configurarMR();
      if (!(myCookie != null)) {
        save = "Nuevo*" + $("#tipoMR").val() + "*" + $("#tiempoMR").val() + "*" + $("#digitosMR").val() + "*";
        for (i = m = 0, ref = this.matrizMRConfiguracion.length - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
          save += (parseInt(this.matrizMRConfiguracion[i][0])) + " " + (parseInt(this.matrizMRConfiguracion[i][1])) + " " + this.matrizMRConfiguracion[i][2];
          if (i !== this.matrizMRConfiguracion.length - 1) {
            save += "-";
          }
        }
        seleccionado = this.todasConfiguracionesMR.length;
        $.cookie('initMR', save, {
          expires: 14
        });
      }
      return this.cargarMR();
    };

    motorReaction.prototype.cargarMR = function() {
      var arrayBase, arrayBase1, arrayBase2, arrayBase3, auxBase, auxBase1, auxBase2, i, j, k, m, myCookie, o, p, q, ref, ref1, ref2, ref3, results, select;
      myCookie = $.cookie('initMR');
      k = 0;
      arrayBase = [];
      arrayBase = myCookie.split("|");
      for (i = m = 0, ref = arrayBase.length - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
        auxBase = arrayBase[i];
        arrayBase1 = auxBase.split("*");
        this.todasConfiguracionesMR[k] = [];
        this.todasConfiguracionesMR[k][0] = arrayBase1[0];
        this.todasConfiguracionesMR[k][1] = arrayBase1[1];
        this.todasConfiguracionesMR[k][2] = arrayBase1[2];
        this.todasConfiguracionesMR[k][3] = arrayBase1[3];
        auxBase1 = arrayBase1[4];
        arrayBase2 = auxBase1.split("-");
        this.todasConfiguracionesMR[k][4] = [];
        for (j = o = 0, ref1 = arrayBase2.length - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; j = 0 <= ref1 ? ++o : --o) {
          this.todasConfiguracionesMR[k][4][j] = [];
          auxBase2 = arrayBase2[j];
          arrayBase3 = auxBase2.split(" ");
          this.todasConfiguracionesMR[k][4][j][0] = arrayBase3[0];
          this.todasConfiguracionesMR[k][4][j][1] = arrayBase3[1];
          this.todasConfiguracionesMR[k][4][j][2] = arrayBase3[2];
        }
        k++;
      }
      j++;
      k--;
      $('#abrirMR').html('');
      for (i = p = 0, ref2 = this.todasConfiguracionesMR.length - 1; 0 <= ref2 ? p <= ref2 : p >= ref2; i = 0 <= ref2 ? ++p : --p) {
        select = "";
        if (i === this.selectedMRAccion) {
          select = "  selected";
        }
        $('#abrirMR').append("<option value=\"" + i + "\" " + select + ">" + this.todasConfiguracionesMR[i][0] + "</option>");
      }
      $('#abrirMR1').html('');
      results = [];
      for (i = q = 0, ref3 = this.todasConfiguracionesMR.length - 1; 0 <= ref3 ? q <= ref3 : q >= ref3; i = 0 <= ref3 ? ++q : --q) {
        select = "";
        if (i === 0) {
          select = "  selected";
        }
        results.push($('#abrirMR1').append("<option value=\"" + i + "\" " + select + ">" + this.todasConfiguracionesMR[i][0] + "</option>"));
      }
      return results;
    };

    motorReaction.prototype.configurarMR = function() {
      var auxSuma, emptyColumBin, emptyColumns, emptyColumsDec, emptyColumsLetters, especial, fModif, fPossible, finL, i, iSpace, ii, imprimir, inicioCuadro, j, jSpace, jj, k, l, m, mResta, maxColumnsBin, maxColumnsDec, maxColumnsLetters, myX, myY, o, p, ponerPossible, possible, possible1, possible2, possible3, q, ref, results, t, txt, x;
      this.tipoMR = parseInt($("#tipoMR").val());
      this.digitosMR = parseInt($("#digitosMR").val());
      emptyColumsDec = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      emptyColumBin = [3, 6, 9, 12, 15, 18];
      emptyColumsLetters = [2, 4, 7, 12, 13, 16, 19, 22, 25, 28];
      possible = "abcdefghijklmnopqrstuvwxyz";
      txt = possible.charAt(_.random(0, possible.length - 1));
      possible1 = "0123456789";
      possible2 = "101010";
      possible3 = "010101";
      maxColumnsDec = 22;
      maxColumnsBin = 21;
      maxColumnsLetters = 22;
      iSpace = 30;
      jSpace = 30;
      imprimir = "";
      inicioCuadro = $(".wrapper").position();
      inicioCuadro = inicioCuadro.top;
      if (this.tipoMR === 0) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible1;
        finL = 10;
      }
      if (this.tipoMR === 1) {
        emptyColumns = emptyColumBin;
        ponerPossible = possible2;
        finL = 5;
      }
      if (this.tipoMR === 2) {
        emptyColumns = emptyColumsDec;
        ponerPossible = possible;
        finL = 26;
      }
      l = 0;
      if (this.tipoMR === 0 || this.tipoMR === 2) {
        k = 0;
        for (i = m = 0; m <= 20; i = ++m) {
          auxSuma = 0;
          for (j = o = 0; o <= 19; j = ++o) {
            if (l === finL) {
              l = 0;
            }
            if (k < this.digitosMR) {
              if (!(this.matrizMRConfiguracion[k] != null)) {
                this.matrizMRConfiguracion[k] = [];
                this.matrizMRConfiguracion[k][4] = 0;
                this.matrizMRConfiguracion[k][5] = 0;
              } else {
                this.matrizMRConfiguracion[k][4] = 1;
                this.matrizMRConfiguracion[k][5] = 1;
              }
              if (_.find(emptyColumns, (function(_this) {
                return function(num) {
                  return num === j;
                };
              })(this))) {
                auxSuma += jSpace;
              }
              myX = 20 + j * jSpace + auxSuma;
              myY = inicioCuadro + i * iSpace;
              if (parseInt(this.matrizMRConfiguracion[k][4]) === 1) {
                this.matrizMRConfiguracion[k][2];
              } else {
                this.matrizMRConfiguracion[k][2] = k + 1;
                this.matrizMRConfiguracion[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracion[k][5]) === 1) {
                myX = this.matrizMRConfiguracion[k][0];
                myY = this.matrizMRConfiguracion[k][1];
              } else {
                this.matrizMRConfiguracion[k][3] = 0;
                this.matrizMRConfiguracion[k][0] = myX;
                this.matrizMRConfiguracion[k][1] = myY;
              }
              imprimir += "<div class=\"element\" id=\"myElement" + k + "\"  style=\"margin-left: " + myX + "px; top: " + myY + "px;\"> 					\n		<b> " + (ponerPossible.charAt(l)) + "  </b>\n</div>	";
              k++;
              l++;
            } else {
              break;
            }
          }
          if (k > this.digitosMR) {
            break;
          }
        }
      }
      if (this.tipoMR === 1) {
        k = 0;
        fPossible = 1;
        mResta = 1;
        ii = 0;
        jj = 0;
        especial = 0;
        for (i = p = 0; p <= 4; i = ++p) {
          auxSuma = 0;
          mResta = 1;
          jj = 0;
          fModif = 1;
          for (j = q = 0; q <= 41; j = ++q) {
            if (k < this.digitosMR) {
              if (!(this.matrizMRConfiguracion[k] != null)) {
                this.matrizMRConfiguracion[k] = [];
                this.matrizMRConfiguracion[k][4] = 0;
                this.matrizMRConfiguracion[k][5] = 0;
              } else {
                this.matrizMRConfiguracion[k][4] = 1;
                this.matrizMRConfiguracion[k][5] = 1;
              }
              if (k % 6 === 0) {
                l = 0;
                if (fPossible) {
                  ponerPossible = possible2;
                  fPossible = 0;
                } else {
                  ponerPossible = possible3;
                  fPossible = 1;
                }
                if (j !== 0) {
                  auxSuma += jSpace;
                }
              }
              if (k % 3 === 0 && j !== 0) {
                if (fModif) {
                  fModif = 0;
                  ii++;
                  jj -= 3;
                } else {
                  fModif = 1;
                  ii--;
                }
              }
              myX = 20 + jj * jSpace + auxSuma;
              myY = inicioCuadro + ii * iSpace;
              if (parseInt(this.matrizMRConfiguracion[k][4]) === 1) {
                this.matrizMRConfiguracion[k][2];
              } else {
                this.matrizMRConfiguracion[k][2] = k + 1;
                this.matrizMRConfiguracion[k][4] = 0;
              }
              if (parseInt(this.matrizMRConfiguracion[k][5]) === 1) {
                myX = this.matrizMRConfiguracion[k][0];
                myY = this.matrizMRConfiguracion[k][1];
              } else {
                this.matrizMRConfiguracion[k][3] = 0;
                this.matrizMRConfiguracion[k][0] = myX;
                this.matrizMRConfiguracion[k][1] = myY;
              }
              imprimir += "<div class=\"element\" id=\"myElement" + k + "\"  style=\"margin-left: " + myX + "px; top: " + myY + "px;\"> \n	<b>" + (ponerPossible.charAt(l)) + "</b>\n</div>	";
              $(".container").html(imprimir);
              k++;
              l++;
              jj++;
            } else {
              break;
            }
          }
          ii += 1;
          if (k > this.digitosMR) {
            break;
          }
        }
      }
      $(".container").html(imprimir);
      results = [];
      for (x = t = 0, ref = this.matrizMRConfiguracion.length - 1; 0 <= ref ? t <= ref : t >= ref; x = 0 <= ref ? ++t : --t) {
        $("myElement" + x).unbind('click');
        results.push(eval("$(\"#myElement" + x + "\").click(function() {\n\n	fPoner = 1;\n	sacar = [];\n\n	for(j=0;j<window.juegoReaction.matrizSeleccionMR.length;j++){\n		if (window.juegoReaction.matrizSeleccionMR[j] == " + x + "){\n			fPoner = 0;\n			sacar[0] = " + x + ";\n\n			window.juegoReaction.matrizSeleccionMR = _.difference(window.juegoReaction.matrizSeleccionMR, sacar) ;\n		}\n		\n	}\n\n	\n\n	if (fPoner){\n\n		window.juegoReaction.matrizSeleccionMR = _.union(window.juegoReaction.matrizSeleccionMR, " + x + ");\n		myVal = _.map(window.juegoReaction.matrizSeleccionMR, function(num){ return num; })\n		\n		$(\"#seleccionMR\").val(myVal);\n		\n	}\n\n	window.juegoReaction.matrizSeleccionMR = _.sortBy(window.juegoReaction.matrizSeleccionMR, function(num){ return num; });\n\n	myVal = _.map(window.juegoReaction.matrizSeleccionMR, function(num){ return num; });\n		\n	$(\"#seleccionMR\").val(myVal);\n\n	if (window.juegoReaction.matrizSeleccionMR.length == 1){\n\n		$(\"#siguienteMR\").val(window.juegoReaction.matrizMRConfiguracion[" + x + "][2]);\n	}else{\n		$(\"#siguienteMR\").val(\"\");\n\n	}\n});"));
      }
      return results;
    };

    motorReaction.prototype.checkboxAction = function(accion, name, cantidad, yy) {
      var _aR, m, o, p, ref, ref1, ref2, xx;
      if (accion === "all") {
        if (yy === 10000) {
          $("#ch17").prop('checked', true);
          $("#ch18").prop('checked', true);
          $("#ch19").prop('checked', true);
          $("#ch10").prop('checked', true);
          $("#ch20").prop('checked', true);
          $("#ch9").prop('checked', true);
          $("#ch21").prop('checked', true);
          $("#ch22").prop('checked', true);
          $("#ch23").prop('checked', true);
          $("#ch24").prop('checked', true);
        } else {
          for (xx = m = 0, ref = cantidad; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
            $("#" + name + xx).prop('checked', true);
          }
        }
      }
      if (accion === "random") {
        if (yy === 10000) {
          _aR = [true, false];
          $("#ch17").prop('checked', _aR[_.random(0, 1)]);
          $("#ch18").prop('checked', _aR[_.random(0, 1)]);
          $("#ch19").prop('checked', _aR[_.random(0, 1)]);
          $("#ch10").prop('checked', _aR[_.random(0, 1)]);
          $("#ch20").prop('checked', _aR[_.random(0, 1)]);
          $("#ch9").prop('checked', _aR[_.random(0, 1)]);
          $("#ch21").prop('checked', _aR[_.random(0, 1)]);
          $("#ch22").prop('checked', _aR[_.random(0, 1)]);
          $("#ch23").prop('checked', _aR[_.random(0, 1)]);
          $("#ch24").prop('checked', _aR[_.random(0, 1)]);
        } else {
          for (xx = o = 0, ref1 = cantidad; 0 <= ref1 ? o <= ref1 : o >= ref1; xx = 0 <= ref1 ? ++o : --o) {
            if (_.random(0, 1)) {
              $("#" + name + xx).prop('checked', true);
            } else {
              $("#" + name + xx).prop('checked', false);
            }
          }
        }
      }
      if (accion === "quitar") {
        for (xx = p = 0, ref2 = cantidad; 0 <= ref2 ? p <= ref2 : p >= ref2; xx = 0 <= ref2 ? ++p : --p) {
          if ($("#" + name + xx).is(':checked')) {
            $("#" + name + xx).prop('checked', false);
          }
        }
        if (yy === 21) {
          $("#" + name + "21").prop('checked', true);
          $("#" + name + "22").prop('checked', true);
          $("#" + name + "23").prop('checked', true);
          return $("#" + name + "24").prop('checked', true);
        } else {
          return $("#" + name + yy).prop('checked', true);
        }
      }
    };

    motorReaction.prototype.configurarEjercicios = function() {
      var auxEspacios4, m, o, p, q, ref, ref1, ref2, ref3, xx, yy;
      this.ojosPasadas = 0;
      this.memoriaJugadas = 0;
      this.articulos = window.articulos;
      this.sustantivos = window.sustantivos;
      this.adjetivos = window.adjetivos;
      if ($("#allReaction").is(':checked')) {
        switch (_.random(0, 3)) {
          case 0:
            this.memoriaM = window.memoriaM1;
            break;
          case 1:
            this.memoriaM = window.memoriaM2;
            break;
          case 2:
            this.memoriaM = window.memoriaM3;
            break;
          case 3:
            this.memoriaM = window.memoriaM4;
        }
      } else {
        this.memoriaM = window.memoriaM4;
      }
      this.alfabeto = window.alfabeto;
      this.ojosImagenes = window.ojosImagenes;
      this.ojosLeyendas = window.ojosLeyendas;
      auxEspacios4 = $("#espacios4").val();
      this.espacios = '<span style="display: inline-block; width: 280px;">&nbsp;</span>';
      this.espacios1 = '<span style="display: inline-block; width: 100px;">&nbsp;</span>';
      this.espacios5 = '<span style="display: inline-block; width: 20px;">&nbsp;</span>';
      this.espacios4 = "<span style=\"display: inline-block; width: " + auxEspacios4 + "px;\">&nbsp;</span>";
      this.estado = 1;
      this.totalPasadas = parseInt($("#cantPasadas").val());
      this.errores = 0;
      this.aciertos = 0;
      this.tieneMemoria = 0;
      this.tieneMemoria2 = 0;
      yy = 0;
      this.ejerciciosActivos = [];
      for (xx = m = 0, ref = this.totalEjercicios; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
        this.tiempoEjercicios[xx] = [];
        this.tiempoEjercicios[xx][0] = $("#t" + xx).val();
        this.tiempoEjercicios[xx][1] = $("#tt" + xx).val();
        if ($("#ch" + xx).is(':checked')) {
          this.ejerciciosActivos[yy] = xx;
          yy++;
          if (xx === 5) {
            this.tieneMemoria = 1;
          }
          if (xx === 7) {
            this.tieneMemoria2 = 1;
          }
        }
      }
      yy = 0;
      this.ejerciciosActivosMemoria = [];
      for (xx = o = 0, ref1 = this.totalEjerciciosMemoria - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; xx = 0 <= ref1 ? ++o : --o) {
        if ($("#mm" + xx).is(':checked')) {
          this.ejerciciosActivosMemoria[yy] = xx;
          yy++;
        }
      }
      for (xx = p = 0, ref2 = this.totalEjercicios; 0 <= ref2 ? p <= ref2 : p >= ref2; xx = 0 <= ref2 ? ++p : --p) {
        this.erroresEjercicios[xx] = 0;
      }
      for (xx = q = 0, ref3 = this.totalEjercicios; 0 <= ref3 ? q <= ref3 : q >= ref3; xx = 0 <= ref3 ? ++q : --q) {
        this.resultados[xx] = [];
      }
      this.coloresResultados[0] = "rgba(0,0,180";
      this.leyendaResultados[0] = "logic";
      this.coloresResultados[1] = "rgba(255,118,0";
      this.leyendaResultados[1] = "math";
      this.coloresResultados[2] = "rgba(255,255,0";
      this.leyendaResultados[2] = "periferica";
      this.coloresResultados[3] = "rgba(255,0,0";
      this.leyendaResultados[3] = "bin";
      this.coloresResultados[4] = "rgba(0,154,37";
      this.leyendaResultados[4] = "sinestesia";
      this.coloresResultados[5] = "rgba(169,34,0";
      this.leyendaResultados[5] = "reaccion";
      this.coloresResultados[6] = "rgba(100,100,100";
      this.leyendaResultados[6] = "speed reading";
      this.coloresResultados[7] = "rgba(0,154,37";
      this.leyendaResultados[7] = "Memoria";
      this.coloresResultados[8] = "rgba(121,33,135";
      this.leyendaResultados[8] = "Ojos";
      this.coloresResultados[9] = "rgba(175,200,74";
      this.leyendaResultados[9] = "SumFlash";
      this.coloresResultados[10] = "rgba(255,152,213";
      this.leyendaResultados[10] = "Calendario";
      this.coloresResultados[11] = "rgba(12,75,100";
      this.leyendaResultados[11] = "ClaveMusica";
      this.coloresResultados[12] = "rgba(55,19,112";
      this.leyendaResultados[12] = "Silogismos";
      this.coloresResultados[13] = "rgba(175,155,50";
      this.leyendaResultados[13] = "Hectoc";
      this.coloresResultados[14] = "rgba(175,155,50";
      this.leyendaResultados[14] = "Laberinto";
      this.coloresResultados[15] = "rgba(175,155,50";
      this.leyendaResultados[15] = "MathLogic";
      this.coloresResultados[16] = "rgba(175,155,50";
      this.leyendaResultados[16] = "EmoLogic";
      this.coloresResultados[17] = "rgba(175,155,50";
      this.leyendaResultados[17] = "Suma10";
      this.coloresResultados[18] = "rgba(175,155,50";
      this.leyendaResultados[18] = "Multiplicación";
      this.coloresResultados[19] = "rgba(175,155,50";
      this.leyendaResultados[19] = "Suma100";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[20] = "Resta";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[21] = "Cuadrado 2 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[22] = "Cuadrado 3 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[23] = "Cuadrado 4 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[24] = "Cuadrado 5 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      return this.leyendaResultados[25] = "Raiz cuadrada";
    };

    motorReaction.prototype.laberinto = function() {
      $("#screen").html("<div id=\"labe\">\n<canvas id=\"canvas\" width=\"400\" height=\"300\"></canvas>\n</div>");
      this.tiempo();
      this.resultado = true;
      this.pausa = 0;
      createMaze();
      $("#labe").animate({
        'zoom': $("#zoomLaberinto").val()
      }, 100);
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[14][1]);
        };
      })(this)), this.tiempoEjercicios[14][0]);
    };

    motorReaction.prototype.hectoc = function() {
      var possible, txt;
      possible = "123456789";
      txt = possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1));
      this._tR = txt;
      this.resultado = true;
      this.t_ini = Date.now();
      this.tiempo();
      this.pausa = 0;
      $("#screen").html("<center>\n	Entrena tu cerebro! El objetivo es siempre 100. <br> Seis d&iacute;gitos deben ser usados, en el orden que aparecen, junto a los operadores +,-,*,/,(,) y pow(base,exponente). <br> Pueden combinarse d&iacute;gitos simples en n&uacute;meros mayores. Buena suerte!\n		<br>\n			1+(2+3+4)*(5+6) = 100 <br>\n			(677-77)/6\n		 <br><br>\n\n	<b>" + txt + "</b>&nbsp;<input type=\"text\" style=\"width: 200px\" value=\"\" id=\"hectoc-text\"><input type=\"button\" name=\"ent-hec\" value=\"entrar\"  id=\"hectoc-btn\">\n</center>");
      $('#hectoc-text').focus();
      $('#hectoc-text').keypress((function(_this) {
        return function(event) {
          var ev;
          if (event.which === 13) {
            ev = $("#hectoc-text").val();
            if (parseInt(eval(ev)) === parseInt(100)) {
              return _this.checkPosicion(true);
            } else {
              return _this.checkPosicion(false);
            }
          }
        };
      })(this));
      $('#hectoc-btn').click((function(_this) {
        return function() {
          var ev;
          ev = $("#hectoc-text").val();
          _this.resultadosList = _this._tR + " se resolvio con " + ev + " su da " + (parseInt(eval(ev)) === 100 ? "correcta" : parseInt(eval(ev))) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (parseInt(eval(ev)) === parseInt(100)) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[13][1]);
        };
      })(this)), this.tiempoEjercicios[13][0]);
    };

    motorReaction.prototype.silogismos = function() {
      var continuar, elegido1, elegido2, elegidoRnd, lessOrMore, m, matrix_img, misPalabras, misPao, mm, o, objetos, p, possible, possible1, preguntaLessOrMore, preguntaLessOrMore1, q, ref, ref1, ref2, ref3, ref4, ref5, ref6, rnd, salida, salida1, salida2, scriptPut, seeQ, silo, t, tipo, tipoSilogismo, totalPosibles, txt, u, v, xx;
      tipo = _.random(0, 1);
      objetos = [];
      totalPosibles = parseInt($("#cantidadSilogismos").val());
      if (parseInt($("#tipoSilogismo").val()) === 3) {
        tipoSilogismo = _.random(0, 1);
      } else {
        tipoSilogismo = parseInt($("#tipoSilogismo").val());
      }
      misPalabras = _.shuffle(window.palabras);
      misPao = _.shuffle(window.PAO);
      console.log(misPao);
      matrix_img = _.shuffle(window.memoriaM4);
      for (xx = m = 0, ref = totalPosibles; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
        objetos[xx] = [];
        possible = "BCDFGHJKLMNPQRSTVWXYZ";
        possible1 = "AEIOU";
        while (true) {
          continuar = 0;
          txt = possible.charAt(_.random(0, possible.length - 1)) + possible1.charAt(_.random(0, possible1.length - 1)) + possible.charAt(_.random(0, possible.length - 1));
          for (mm = o = ref1 = xx; ref1 <= 0 ? o <= 0 : o >= 0; mm = ref1 <= 0 ? ++o : --o) {
            if (txt !== objetos[mm][0]) {
              continuar = 1;
            }
          }
          if (continuar) {
            break;
          }
        }
        if (tipoSilogismo === 0) {
          objetos[xx][0] = misPalabras[xx];
        }
        if (tipoSilogismo === 1) {
          objetos[xx][0] = txt;
        }
        if (tipoSilogismo === 2) {
          objetos[xx][0] = misPao[xx][0] + " " + misPao[xx][1] + " " + misPao[xx][2];
        }
        if (tipoSilogismo === 4) {
          objetos[xx][0] = " <img src=\"" + matrix_img[xx] + "\" class=\"emo-img\"> ";
        }
        objetos[xx][1] = _.random(0, 1);
      }
      console.log(objetos);
      silo = [];
      tipo = _.random(0, 1);
      if (tipo) {
        salida = "";
        for (xx = p = 0, ref2 = totalPosibles - 1; 0 <= ref2 ? p <= ref2 : p >= ref2; xx = 0 <= ref2 ? ++p : --p) {
          if (objetos[xx][1] === objetos[xx + 1][1]) {
            if (_.random(0, 1)) {
              silo[xx] = objetos[xx][0] + " is the same as " + objetos[xx + 1][0] + "<br>";
            } else {
              silo[xx] = objetos[xx + 1][0] + " is the same as " + objetos[xx][0] + "<br>";
            }
          } else {
            if (_.random(0, 1)) {
              silo[xx] = objetos[xx][0] + " is the opposite to " + objetos[xx + 1][0] + "<br>";
            } else {
              silo[xx] = objetos[xx + 1][0] + " is the opposite to " + objetos[xx][0] + "<br>";
            }
          }
          salida += silo[xx];
        }
        elegido1 = _.random(0, totalPosibles);
        while (true) {
          elegido2 = _.random(0, totalPosibles);
          if (elegido2 !== elegido1) {
            break;
          }
        }
        elegidoRnd = _.random(0, 1);
        if (elegidoRnd) {
          if (_.random(0, 1)) {
            salida1 = "<b style=\"color:blue;\">Is " + objetos[elegido1][0] + " the same as " + objetos[elegido2][0] + "?</b>";
          } else {
            salida1 = "<b style=\"color:blue;\">Is " + objetos[elegido2][0] + " the same as " + objetos[elegido1][0] + "?</b>";
          }
          if (objetos[elegido1][1] === objetos[elegido2][1]) {
            this.resultado = true;
          } else {
            this.resultado = false;
          }
        } else {
          if (_.random(0, 1)) {
            salida1 = "<b style=\"color:blue;\">Is " + objetos[elegido1][0] + " opposite to " + objetos[elegido2][0] + "?</b>";
          } else {
            salida1 = "<b style=\"color:blue;\">Is " + objetos[elegido2][0] + " opposite to " + objetos[elegido1][0] + "?</b>";
          }
          if (objetos[elegido1][1] !== objetos[elegido2][1]) {
            this.resultado = true;
          } else {
            this.resultado = false;
          }
        }
        if ($("#desordenarProposiciones").is(':checked')) {
          silo = _.shuffle(silo);
          salida = "";
          for (xx = q = 0, ref3 = totalPosibles - 1; 0 <= ref3 ? q <= ref3 : q >= ref3; xx = 0 <= ref3 ? ++q : --q) {
            salida += silo[xx];
          }
        }
      } else {
        salida = "";
        lessOrMore = _.random(0, 1);
        preguntaLessOrMore = "more";
        if (lessOrMore) {
          preguntaLessOrMore = "less";
        }
        console.clear();
        console.log(preguntaLessOrMore);
        for (xx = t = 0, ref4 = objetos.length - 1; 0 <= ref4 ? t <= ref4 : t >= ref4; xx = 0 <= ref4 ? ++t : --t) {
          console.log(objetos[xx][0]);
        }
        for (xx = u = 0, ref5 = totalPosibles - 1; 0 <= ref5 ? u <= ref5 : u >= ref5; xx = 0 <= ref5 ? ++u : --u) {
          silo[xx] = objetos[xx][0] + (" is " + preguntaLessOrMore + " than ") + objetos[xx + 1][0] + "<br>";
          if ($("#invertirProposiciones").is(':checked')) {
            rnd = _.random(0, 1);
            if (rnd) {
              preguntaLessOrMore1 = "less";
              if (preguntaLessOrMore === "less") {
                preguntaLessOrMore1 = "more";
              }
              silo[xx] = objetos[xx + 1][0] + (" is " + preguntaLessOrMore1 + " than ") + objetos[xx][0] + ("<!-- | " + rnd + "--><br>");
            }
          }
          salida += silo[xx];
        }
        elegido1 = _.random(0, totalPosibles);
        while (true) {
          elegido2 = _.random(0, totalPosibles);
          if (elegido2 !== elegido1) {
            break;
          }
        }
        rnd = _.random(0, 1);
        if (rnd) {
          salida1 = "<b style=\"color:blue;\">Is " + objetos[elegido1][0] + " less than " + objetos[elegido2][0] + "?</b>";
          if (lessOrMore) {
            if (elegido1 < elegido2) {
              this.resultado = true;
            } else {
              this.resultado = false;
            }
          } else {
            if (elegido1 < elegido2) {
              this.resultado = false;
            } else {
              this.resultado = true;
            }
          }
        } else {
          salida1 = "<b style=\"color:blue;\">Is " + objetos[elegido1][0] + " more than " + objetos[elegido2][0] + "?</b>";
          if (lessOrMore) {
            if (elegido1 < elegido2) {
              this.resultado = false;
            } else {
              this.resultado = true;
            }
          } else {
            if (elegido1 < elegido2) {
              this.resultado = true;
            } else {
              this.resultado = false;
            }
          }
        }
        if ($("#desordenarProposiciones").is(':checked')) {
          silo = _.shuffle(silo);
          salida = "";
          for (xx = v = 0, ref6 = totalPosibles - 1; 0 <= ref6 ? v <= ref6 : v >= ref6; xx = 0 <= ref6 ? ++v : --v) {
            salida += silo[xx];
          }
        }
      }
      this.pausa = 0;
      if (_.random(0, 1)) {
        salida2 = "YES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NO";
      } else {
        salida2 = "NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; YES";
        this.resultado = !this.resultado;
      }
      this.t_ini = Date.now();
      this.tiempo();
      scriptPut = "";
      seeQ = "";
      if ($("#hideQuestion").is(':checked')) {
        scriptPut = "<script> $(\"#myQ\").hide(); \nfunction _seeQ(){ $(\"#myA\").hide();  $(\"#seeQ\").hide(); $(\"#myQ\").show();  } \n</script> ";
        seeQ = " <div id=\"seeQ\" onclick=\"_seeQ();\" style=\"color:blue;\"> See Question </div> ";
        console.log("script put");
      }
      $("#screen").html("<div id=\"myA\">" + salida + "</div>" + seeQ + "<div id=\"myQ\">" + salida1 + "<br></div><br>" + salida2 + "\n\n" + scriptPut + "\n");
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[12][1]);
        };
      })(this)), this.tiempoEjercicios[12][0]);
    };

    motorReaction.prototype.clef = function() {
      var claves, control, l, lugar, lugares, m, nota, o, p, s, seleccion, seleccionNota, xx;
      claves = [];
      for (xx = m = 0; m <= 6; xx = ++m) {
        claves[xx] = [];
      }
      claves[0][0] = "sol.gif";
      claves[0][1] = 0;
      claves[1][0] = "fa.gif";
      claves[1][1] = -2;
      claves[2][0] = "do1.gif";
      claves[2][1] = -5;
      claves[3][0] = "do2.gif";
      claves[3][1] = -3;
      claves[4][0] = "do3.gif";
      claves[4][1] = -1;
      claves[5][0] = "do4.gif";
      claves[5][1] = 1;
      claves[6][0] = "fa3.gif";
      claves[6][1] = -4;
      lugares = [];
      for (xx = o = 0; o <= 11; xx = ++o) {
        lugares[xx] = [];
      }
      lugares[0][0] = 8;
      lugares[0][1] = 6;
      lugares[1][0] = 12;
      lugares[1][1] = 7;
      lugares[2][0] = 16;
      lugares[2][1] = 8;
      lugares[3][0] = 20;
      lugares[3][1] = 9;
      lugares[4][0] = 24;
      lugares[4][1] = 10;
      lugares[5][0] = 27;
      lugares[5][1] = 11;
      lugares[6][0] = 31;
      lugares[6][1] = 12;
      lugares[7][0] = 35;
      lugares[7][1] = 13;
      lugares[8][0] = 49;
      lugares[8][1] = 14;
      lugares[9][0] = 43;
      lugares[9][1] = 15;
      lugares[10][0] = 47;
      lugares[10][1] = 16;
      nota = [];
      nota[0] = 2;
      nota[2] = 1;
      nota[3] = 0;
      nota[4] = 6;
      nota[5] = 5;
      nota[6] = 4;
      nota[7] = 3;
      nota[8] = 2;
      nota[9] = 1;
      nota[10] = 0;
      nota[11] = 6;
      nota[12] = 5;
      nota[13] = 4;
      nota[14] = 3;
      nota[15] = 2;
      nota[16] = 1;
      nota[17] = 0;
      s = _.random(0, 6);
      seleccion = claves[s][0];
      l = _.random(0, 10);
      lugar = lugares[l][0];
      seleccionNota = nota[lugares[l][1] + claves[s][1]];
      console.log(seleccionNota);
      control = "";
      if (this.esMovil) {
        control = "<input type=\"button\" name=\"cc1\" value=\"C\" id=\"btn-c\">\n<input type=\"button\" name=\"cc2\" value=\"D\" id=\"btn-d\">\n<input type=\"button\" name=\"cc3\" value=\"E\" id=\"btn-e\">\n<input type=\"button\" name=\"cc4\" value=\"F\" id=\"btn-f\">\n<input type=\"button\" name=\"cc5\" value=\"G\" id=\"btn-g\">\n<input type=\"button\" name=\"cc6\" value=\"A\" id=\"btn-a\">\n<input type=\"button\" name=\"cc7\" value=\"B\" id=\"btn-b\">\n";
      }
      $("#screen").html("<br>\n<div style=\"width: 80px; height: 66px;\">\n	<div style=\"width: 40px; height: 66px; background-image: url(clef/" + seleccion + "); float:left;\"></div>\n	<div style=\"width: 40px; height: 66px; background-image: url(clef/penta.png); float:left;\">\n		<div style=\"margin-top: " + lugar + "px; margin-right: 0px;\"><img src=\"clef/Whole-Note.gif\" width=\"8px\" height=\"8px\"></div>\n	</div>\n</div>\n<br>\n" + control + "\n");
      if (this.esMovil) {
        $("#btn-c").click((function(_this) {
          return function() {
            return _this.checkPosicion(_this.teclaNotas[0]);
          };
        })(this));
        $("#btn-d").click((function(_this) {
          return function() {
            return _this.checkPosicion(_this.teclaNotas[1]);
          };
        })(this));
        $("#btn-e").click((function(_this) {
          return function() {
            return _this.checkPosicion(_this.teclaNotas[2]);
          };
        })(this));
        $("#btn-f").click((function(_this) {
          return function() {
            return _this.checkPosicion(_this.teclaNotas[3]);
          };
        })(this));
        $("#btn-g").click((function(_this) {
          return function() {
            return _this.checkPosicion(_this.teclaNotas[4]);
          };
        })(this));
        $("#btn-a").click((function(_this) {
          return function() {
            return _this.checkPosicion(_this.teclaNotas[5]);
          };
        })(this));
        $("#btn-b").click((function(_this) {
          return function() {
            return _this.checkPosicion(_this.teclaNotas[6]);
          };
        })(this));
      }
      this.resultado = true;
      this.pausa = 0;
      for (xx = p = 0; p <= 6; xx = ++p) {
        this.teclaNotas[xx] = false;
      }
      this.teclaNotas[seleccionNota] = true;
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[11][1]);
        };
      })(this)), this.tiempoEjercicios[11][0]);
    };

    motorReaction.prototype.ojos = function() {
      var cambiar, color, inversion, inverso, inversoCss, inversoTxt, mostrar, rand;
      inversion = [];
      inversion[0] = 1;
      inversion[1] = 0;
      inversion[2] = 2;
      inversion[3] = 4;
      inversion[4] = 3;
      inversion[5] = 6;
      inversion[6] = 5;
      inversion[7] = 7;
      this.pausa = 0;
      inversoTxt = "";
      inversoCss = "";
      inverso = 0;
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      if (this.ojosPasadas === 0) {
        this.ojosAnterior = _.random(0, this.ojosImagenes.length - 1);
        this.esInverso = _.random(0, 1);
        this.tipo = 2;
        this.resultado = true;
        if (this.esInverso) {
          inversoCss = "border: 3px solid #8AC007; width: 400px;";
          inversoTxt = "Inverso";
        }
      } else {
        inverso = _.random(0, 1);
        cambiar = _.random(0, 1);
        if (inverso) {
          inversoCss = "border: 3px solid #8AC007; width: 400px;";
          inversoTxt = "Inverso";
        }
        if (cambiar) {
          while (true) {
            rand = _.random(0, this.ojosImagenes.length - 1);
            if (this.esInverso && inverso) {
              if (rand !== this.ojosAnterior) {
                break;
              }
            }
            if (this.esInverso && !inverso) {
              if (rand !== inversion[this.ojosAnterior]) {
                break;
              }
            }
            if (!this.esInverso && inverso) {
              if (inversion[rand] !== this.ojosAnterior) {
                break;
              }
            }
            if (!this.esInverso && !inverso) {
              if (rand !== this.ojosAnterior) {
                break;
              }
            }
          }
          console.log("c|" + this.ojosAnterior + ":" + this.esInverso + "|" + rand + ":" + inverso);
          this.ojosAnterior = rand;
          this.resultado = false;
        } else {
          console.log("|" + this.ojosAnterior + ":" + inversion[this.ojosAnterior]);
          if (inverso) {
            this.ojosAnterior = inversion[this.ojosAnterior];
          }
          this.resultado = true;
        }
        this.esInverso = inverso;
      }
      color = _.random(0, 2);
      if (_.random(0, 4) > 1 && this.ojosAnterior !== 7 && this.ojosPasadas !== 0 && !this.leyendaAnterior) {
        this.leyendaAnterior = 1;
        mostrar = "<br><br><center>" + this.ojosLeyendas[this.ojosAnterior] + "</center>";
      } else {
        this.leyendaAnterior = 0;
        mostrar = "<center><div style=\"" + inversoCss + "\"><img src=\"/ojos/" + this.ojosImagenes[this.ojosAnterior][color] + "\" width=\"200\" height=\"200\"><img src=\"/ojos/" + this.ojosImagenes[this.ojosAnterior][color] + "\" width=\"200\" height=\"200\"></div> </center> <div style=\"clear:both;\"/> " + inversoTxt;
      }
      $("#liveHelp").html("  <img src=\"/em/img/imagen-ojos.jpg\" width=\"325\" height=\"160\"> <div style=\"clear:both;\"/> ");
      $("#screen").html(mostrar);
      this.t_ini = Date.now();
      this.ojosPasadas++;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            if (_this.ojosPasadas === 1) {
              return _this.checkPosicion(_this.resultado);
            } else {
              return _this.checkPosicion(3);
            }
          }), _this.ojosPasadas === 1 ? 0 : _this.tiempoEjercicios[8][1]);
        };
      })(this)), this.tiempoEjercicios[8][0]);
    };

    motorReaction.prototype.tsr = function() {
      var adj, art, bien, cantidadErrores, dondeError, maxAdjetivos, maxArticulos, maxSustantivos, selectAdj, selectArt, selectArt2, selectArt3, selectSust, sust, tipoFrase;
      this.pausa = 0;
      bien = _.random(0, 1);
      this.resultado = bien;
      tipoFrase = _.random(0, 3);
      maxArticulos = 3;
      maxSustantivos = 23;
      maxAdjetivos = 17;
      selectArt = tipoFrase;
      selectSust = _.random(0, maxSustantivos);
      selectAdj = _.random(0, maxAdjetivos);
      art = "";
      sust = "";
      adj = "";
      cantidadErrores = 0;
      dondeError = _.random(0, 2);
      if (bien) {
        art = this.articulos[selectArt][_.random(0, 1)];
        sust = this.sustantivos[selectSust][selectArt];
        adj = this.adjetivos[selectAdj][selectArt];
      } else {
        while (true) {
          selectArt2 = _.random(0, 3);
          if (dondeError = 1) {
            break;
          }
          if (selectArt2 !== selectArt) {
            break;
          }
        }
        while (true) {
          selectArt3 = _.random(0, 3);
          if (dondeError = 0) {
            break;
          }
          if (selectArt3 !== selectArt) {
            break;
          }
        }
        art = this.articulos[selectArt][_.random(0, 1)];
        sust = this.sustantivos[selectSust][selectArt2];
        adj = this.adjetivos[selectAdj][selectArt3];
      }
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      $("#screen").html("<center><h3>" + art + this.espacios4 + sust + this.espacios4 + adj + "</h3></center>");
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h2>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[6][1]);
        };
      })(this)), this.tiempoEjercicios[6][0]);
    };

    motorReaction.prototype.raiz = function(digitosPotencia) {
      var numeroRaiz, resultadoRaiz;
      numeroRaiz = _.random(100000, 999999);
      this._tR = numeroRaiz;
      resultadoRaiz = Math.pow(numeroRaiz, 0.5);
      console.log(resultadoRaiz);
      resultadoRaiz = roundToFive(resultadoRaiz);
      this._tR1 = resultadoRaiz;
      console.log(resultadoRaiz);
      this.resultado = true;
      this.pausa = 0;
      this.t_ini = Date.now();
      $("#screen").html("<center>\n	<h3>√" + numeroRaiz + "</h3>\n	<input type=\"text\" id=\"mySumFlashResult\" style=\"width: 45px\">,<input type=\"text\" id=\"mySumFlashResult1\" style=\"width: 45px\"><input type=\"button\" value=\"ok\" id=\"okSumFlash\">\n</center>");
      eval("\n$(\"#okSumFlash\").click(function(){\n	window.juegoReaction.resultadosList = \"√\" + window.juegoReaction._tR + \" = \" + $(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val() + \" la respuesta es \" + (($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\")?\"correcta\":\"en realidad \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n	localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n	if($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\"){\n		window.juegoReaction.checkPosicion(true);\n	}else{\n		window.juegoReaction.checkPosicion(false);\n	}\n	$(\"#screen\").html(\"\");\n\n});\n\n$(\"#mySumFlashResult1\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		window.juegoReaction.resultadosList = \"√\" + window.juegoReaction._tR + \" = \" + $(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val() + \" la respuesta es \" + (($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\")?\"correcta\":\"en realidad \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\"){\n		window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n	    \n	    $(\"#screen\").html(\"\");\n	 }\n\n	 setTimeout(function(){\n	 	if($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\"){\n	 		window.juegoReaction.resultadosList = \"√\" + window.juegoReaction._tR + \" = \" + $(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val() + \" la respuesta es \" + (($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\")?\"correcta\":\"en realidad \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n			localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n			window.juegoReaction.checkPosicion(true);\n			$(\"#screen\").html(\"\");\n\n		}\n\n	 },5);\n	 \n	console.log(\"1\");\n\n});\n\n$(\"#mySumFlashResult\").keypress(function(event) {\n\n	if($(\"#mySumFlashResult\").val().length==2){\n		setTimeout(function(){$(\"#mySumFlashResult1\").focus(); },5);\n	}\n\n});\n\n$(\"#mySumFlashResult\").focus();\n");
      return this.killTimeout1 = setTimeout(((function(_this) {
        return function() {
          return _this.checkPosicion(3);
        };
      })(this)), 300000);
    };

    motorReaction.prototype.potencia = function(digitosPotencia) {
      var numeroPotenciar, resultadoPotencia;
      if (digitosPotencia === 2) {
        numeroPotenciar = _.random(10, 99);
      }
      if (digitosPotencia === 3) {
        numeroPotenciar = _.random(100, 999);
      }
      if (digitosPotencia === 4) {
        numeroPotenciar = _.random(1000, 9999);
      }
      if (digitosPotencia === 5) {
        numeroPotenciar = _.random(10000, 99999);
      }
      resultadoPotencia = numeroPotenciar * numeroPotenciar;
      this._tR = numeroPotenciar;
      this._tR1 = resultadoPotencia;
      console.log(resultadoPotencia);
      this.resultado = true;
      this.pausa = 0;
      this.t_ini = Date.now();
      $("#screen").html("<center>\n	<h3>" + numeroPotenciar + "²</h3>\n	<input type=\"text\" id=\"mySumFlashResult\" style=\"width: 45px\"><input type=\"button\" value=\"ok\" id=\"okSumFlash\">\n</center>");
      eval("\n$(\"#okSumFlash\").click(function(){\n\n	if(window.juegoReaction.senglarMindMode)\n		return;\n\n	window.juegoReaction.resultadosList = window.juegoReaction._tR + \"² = \" + $(\"#mySumFlashResult\").val() + \" la respuesta es \" + ((parseInt($(\"#mySumFlashResult\").val())==window.juegoReaction._tR1 )?\"correcta\":\"en realidad \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n	localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n	if(parseInt($(\"#mySumFlashResult\").val())==" + resultadoPotencia + " ){\n		window.juegoReaction.checkPosicion(true);\n	}else{\n		window.juegoReaction.checkPosicion(false);\n	}\n	$(\"#screen\").html(\"\");\n\n	\n});\n\n$(\"#mySumFlashResult\").keypress(function(event) {\n	if ( event.which == 13 ) {\n\n		if(window.juegoReaction.senglarMindMode)\n			return;\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \"² = \" + $(\"#mySumFlashResult\").val() + \" la respuesta es \" + ((parseInt($(\"#mySumFlashResult\").val())==window.juegoReaction._tR1 )?\"correcta\":\"en realidad \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt($(\"#mySumFlashResult\").val())==" + resultadoPotencia + "){\n		window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n	    \n	    $(\"#screen\").html(\"\");\n	 }\n\n	 setTimeout(function(){\n	 	if(parseInt($(\"#mySumFlashResult\").val())==" + resultadoPotencia + "){\n	 		window.juegoReaction.resultadosList = window.juegoReaction._tR + \"² = \" + $(\"#mySumFlashResult\").val() + \" la respuesta es \" + ((parseInt($(\"#mySumFlashResult\").val())==window.juegoReaction._tR1 )?\"correcta\":\"en realidad \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n			localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n			window.juegoReaction.checkPosicion(true);\n			$(\"#screen\").html(\"\");\n\n		}\n\n	 },5);\n	 \n	console.log(\"1\");\n\n});\n\n\n\n$(\"#mySumFlashResult\").focus();\n");
      return this.killTimeout1 = setTimeout(((function(_this) {
        return function() {
          return _this.checkPosicion(3);
        };
      })(this)), 3000000);
    };

    motorReaction.prototype.sumFlash = function() {
      var cantidad, elegido, maxSumFlash, minSumFlash, nuevo, sumFlashElegido;
      cantidad = $("#pasadasSumFlash").val();
      minSumFlash = parseInt($("#minSumFlash").val());
      maxSumFlash = parseInt($("#maxSumFlash").val());
      if (this.jugadasSumFlash === 0) {
        this.acumuladorSumFlash = 0;
        this.jugadasSumFlash = 0;
        elegido = -1;
        sumFlashElegido = elegido;
        this._tR = "";
      }
      if (this.jugadasSumFlash < cantidad) {
        while (true) {
          nuevo = _.random(minSumFlash, maxSumFlash);
          if (nuevo !== this.sumFlashElegido) {
            break;
          }
        }
        elegido = nuevo;
        this._tR += "+" + elegido;
        this.sumFlashElegido = elegido;
        this.acumuladorSumFlash += parseInt(elegido);
        this.jugadasSumFlash++;
        $("#screen").html("<center><h1 style=\"color: black; font-size: 100px;\">" + elegido + "</h1></center>");
        console.log(this.tiempoEjercicios[9][0]);
        return this.killTimeout = setTimeout(((function(_this) {
          return function() {
            return _this.sumFlash();
          };
        })(this)), this.tiempoEjercicios[9][0]);
      } else {

        /*
        			if _.random(0,1)
        				@resultado = true
        				mostrar = @acumuladorSumFlash
        			else
        				@resultado = false
        				mostrar = @acumuladorSumFlash + _.random(-10,10)
         */
        this.resultado = true;
        this.t_ini = Date.now();
        this.pausa = 0;
        this.jugadasSumFlash = 0;
        console.log(this.acumuladorSumFlash);
        $("#screen").html("<center>\n	<input type=\"text\" id=\"mySumFlashResult\" style=\"width: 45px\"><input type=\"button\" value=\"ok\" id=\"okSumFlash\">\n</center>");
        eval("\n$(\"#okSumFlash\").click(function(){\n\n	window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + window.juegoReaction.acumuladorSumFlash + \" su respuesta es \" + (parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?\"correcta\":$(\"#mySumFlashResult\").val()) + \"<br>\" + window.juegoReaction.resultadosList ; \n	localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n	if(parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){\n		window.juegoReaction.checkPosicion(true);\n	}else{\n		window.juegoReaction.checkPosicion(false);\n	}\n	$(\"#screen\").html(\"\");\n\n			\n});\n\n$(\"#mySumFlashResult\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + window.juegoReaction.acumuladorSumFlash + \" su respuesta es \" + (parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?\"correcta\":$(\"#mySumFlashResult\").val()) + \"<br>\" + window.juegoReaction.resultadosList; \n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){\n		window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n		    \n	    $(\"#screen\").html(\"\");\n	 }\n\n	 setTimeout(function(){\n	 	if(parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){\n	 		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + window.juegoReaction.acumuladorSumFlash + \" su respuesta es \" + (parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?\"correcta\":$(\"#mySumFlashResult\").val()) + \"<br>\" + window.juegoReaction.resultadosList; \n			localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n			window.juegoReaction.checkPosicion(true);\n			$(\"#screen\").html(\"\");		\n		}\n\n	 },5);\n	 \n	console.log(\"1\");\n\n});\n\n\n\n$(\"#mySumFlashResult\").focus();\n");
        return this.killTimeout1 = setTimeout(((function(_this) {
          return function() {
            return _this.checkPosicion(3);
          };
        })(this)), this.tiempoEjercicios[9][1]);
      }
    };

    motorReaction.prototype.memoria2 = function() {
      var a, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, arrayAux, auxD, b, botonSiguiente, busca, c, cantidad, cantidadEjerciciosMemoria, ceros, css, css1, date, day, der, dimension, esta, figura, finBucle, fullYear, i, ii, izq, j, jj, kk, lado, m, matrices, matrizAbstractas, matrizCarasImagen, matrizFechas, memoMixArray, memoriaM2Mezcladas, month, myDate, noEsta, nombresHombre, nombresMujer, o, p, poner, possible, possible1, q, r, randomMix, ref, ref1, ref10, ref11, ref12, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repetir, res, rnd, salida, str, t, u, v, w, xx, y, year, yy, z, zoomFigure, zzz;
      if (this.memoriaJugadas === 0) {
        this.memoriaM2 = [];
        this.entrarMemoria = 0;
        cantidadEjerciciosMemoria = this.ejerciciosActivosMemoria.length;
        this.ejercicioSeleccionadoMemoria = this.ejerciciosActivosMemoria[_.random(0, cantidadEjerciciosMemoria - 1)];
        cantidad = parseInt($("#cMemoria" + this.ejercicioSeleccionadoMemoria).val());
        this.cantidad1 = cantidad;
        this.constantTime = 0;
        this.bPAO = 0;
        for (xx = m = 0, ref = cantidad + 10; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
          this.PAO[xx] = [];
        }
        if ($("#constantTime").is(':checked')) {
          this.constantTime = 1;
        }
        if (this.ejercicioSeleccionadoMemoria === 0) {
          this.tiempoEjercicios[7][0] = $("#t7").val();
        } else {
          this.tiempoEjercicios[7][0] = $("#tm" + this.ejercicioSeleccionadoMemoria).val();
        }
        this.tiempoEjercicios[7][1] = $("#tt7").val();
        this.tiempoEjercicioInicial = this.tiempoEjercicios[7][0];
        switch (this.ejercicioSeleccionadoMemoria) {
          case 0:
            this.memoriaM2 = window.palabras;
            break;
          case 1:
            this.memoriaM2 = window.cartas;
            break;
          case 2:
            z = 0;
            this.bPAO = 1;
            for (xx = o = 0, ref1 = cantidad + 10; 0 <= ref1 ? o <= ref1 : o >= ref1; xx = 0 <= ref1 ? ++o : --o) {
              repetir = 0;
              a = _.random(0, window.PAO.length - 1);
              b = _.random(0, window.PAO.length - 1);
              c = _.random(0, window.PAO.length - 1);
              this.PAO[z][0] = a;
              this.PAO[z][1] = b;
              this.PAO[z][2] = c;
              this.memoriaM2[xx] = window.PAO[a][0] + " " + window.PAO[b][1] + " " + window.PAO[c][2];
            }
            break;
          case 3:
            this.memoriaM2 = window.numeros;
            break;
          case 4:
            this.memoriaM2 = window.figuras;
            break;
          case 5:
            matrices = [];
            dimension = parseInt($("#dimensionMatriz").val());
            for (xx = p = 0, ref2 = cantidad + 20; 0 <= ref2 ? p <= ref2 : p >= ref2; xx = 0 <= ref2 ? ++p : --p) {
              if (dimension <= 1) {
                finBucle = 1;
                if (dimension === 1) {
                  finBucle = 3;
                }
                a = "";
                for (yy = q = 0, ref3 = finBucle; 0 <= ref3 ? q <= ref3 : q >= ref3; yy = 0 <= ref3 ? ++q : --q) {
                  r = _.random(0, 7);
                  if (r === 0) {
                    a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 1) {
                    a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 2) {
                    a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 3) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 4) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 5) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 6) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 7) {
                    a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                }
              }
              if (dimension > 1) {
                finBucle = 1;
                if (dimension === 3) {
                  finBucle = 3;
                }
                if (dimension === 4) {
                  finBucle = 4;
                }
                a = "";
                for (yy = t = 0, ref4 = finBucle; 0 <= ref4 ? t <= ref4 : t >= ref4; yy = 0 <= ref4 ? ++t : --t) {
                  r = _.random(0, 15);
                  if (r === 0) {
                    a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 1) {
                    a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 2) {
                    a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 3) {
                    a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 4) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 5) {
                    a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 6) {
                    a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 7) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 8) {
                    a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 9) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 10) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 11) {
                    a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 12) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                  }
                  if (r === 13) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 14) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                  if (r === 15) {
                    a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                  }
                }
              }
              matrices[xx] = "<table border=\"1\" style=\"border-collapse: collapse; border: 1px solid black;\" class=\"table-memo\">" + a + "</table>";
            }
            this.memoriaM2 = matrices;
            break;
          case 6:
            matrizCarasImagen = [];
            nombresHombre = window.nombresHombre;
            nombresMujer = window.nombresMujer;
            nombresHombre.sort((function(_this) {
              return function() {
                return 0.5 - Math.random();
              };
            })(this));
            nombresMujer.sort((function(_this) {
              return function() {
                return 0.5 - Math.random();
              };
            })(this));
            yy = 0;
            jj = 0;
            kk = 0;
            for (xx = u = 1; u <= 100; xx = ++u) {
              if (yy === 241) {
                yy = 0;
              }
              if (jj === 271) {
                jj = 0;
              }
              ceros = "";
              if (xx < 10) {
                ceros = "000";
              } else if (xx < 100) {
                ceros = "00";
              } else if (xx < 1000) {
                ceros = "0";
              }
              matrizCarasImagen[kk] = "<div><img src=\"/caras/1-" + ceros + xx + ".jpg\" width=\"100px\" height=\"100px\"><br>" + nombresHombre[yy] + "</div>";
              matrizCarasImagen[kk + 1] = "<div><img src=\"/caras/2-" + ceros + xx + ".jpg\" width=\"100px\" height=\"100px\"><br>" + nombresMujer[jj] + "</div>";
              yy++;
              jj++;
              kk += 2;
            }
            matrizCarasImagen.sort((function(_this) {
              return function() {
                return 0.5 - Math.random();
              };
            })(this));
            this.memoriaM2 = matrizCarasImagen;
            break;
          case 7:
            matrizAbstractas = [];
            for (xx = v = 1; v <= 200; xx = ++v) {
              matrizAbstractas[xx - 1] = "<img src=\"/abstractas/image-" + xx + ".png\">";
            }
            this.memoriaM2 = matrizAbstractas;
            break;
          case 8:
            matrizFechas = [];
            for (xx = w = 0; w <= 100; xx = ++w) {
              myDate = this.randomDate(new Date(1000, 0, 1), new Date(2099, 0, 1));
              month = myDate.getMonth();
              fullYear = myDate.getFullYear();
              day = myDate.getDay();
              date = myDate.getDate();
              year = myDate.getYear();
              matrizFechas[xx] = "<h3>" + date + " - " + window.MONTH[month][1] + " - " + fullYear + "</h3>";
            }
            this.memoriaM2 = matrizFechas;
            break;
          case 9:
            this.memoriaM2 = window.paises;
            break;
          case 10:
            str = $("#simbolitos").html();
            res = str.split(" ");
            this.memoriaM2 = res;
            break;
          case 11:
            str = $("#palabras1").html();
            res = str.split(" ");
            this.memoriaM2 = res;
            break;
          case 12:
            memoMixArray = [];

            /*
            					if typeof(memoMixArray[0]) == "undefined"
            						alert("hola") 
            					return
             */
            for (zzz = y = 0, ref5 = cantidad + 1; 0 <= ref5 ? y <= ref5 : y >= ref5; zzz = 0 <= ref5 ? ++y : --y) {
              randomMix = _.random(0, 11);
              switch (randomMix) {
                case 0:
                  this.mixTiempos[zzz] = $("#t7").val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = window.palabras;
                  }
                  break;
                case 1:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = window.cartas;
                  }
                  break;
                case 2:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    z = 0;
                    this.bPAO = 1;
                    arrayAux = [];
                    for (xx = aa = 0; aa <= 20; xx = ++aa) {
                      repetir = 0;
                      a = _.random(0, window.PAO.length - 1);
                      b = _.random(0, window.PAO.length - 1);
                      c = _.random(0, window.PAO.length - 1);
                      this.PAO[z][0] = a;
                      this.PAO[z][1] = b;
                      this.PAO[z][2] = c;
                      arrayAux[xx] = window.PAO[a][0] + " " + window.PAO[b][1] + " " + window.PAO[c][2];
                    }
                    auxD = [];
                    auxD = arrayAux;
                    auxD.sort((function(_this) {
                      return function() {
                        return 0.5 - Math.random();
                      };
                    })(this));
                    auxD = _.first(auxD, 20);
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = auxD;
                  }
                  break;
                case 3:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    auxD = [];
                    auxD = window.numeros;
                    auxD.sort((function(_this) {
                      return function() {
                        return 0.5 - Math.random();
                      };
                    })(this));
                    auxD = _.first(auxD, 20);
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = auxD;
                  }
                  break;
                case 4:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = window.figuras;
                  }
                  break;
                case 5:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    matrices = [];
                    dimension = parseInt($("#dimensionMatriz").val());
                    for (xx = ab = 0, ref6 = cantidad + 20; 0 <= ref6 ? ab <= ref6 : ab >= ref6; xx = 0 <= ref6 ? ++ab : --ab) {
                      if (dimension <= 1) {
                        finBucle = 1;
                        if (dimension === 1) {
                          finBucle = 3;
                        }
                        a = "";
                        for (yy = ac = 0, ref7 = finBucle; 0 <= ref7 ? ac <= ref7 : ac >= ref7; yy = 0 <= ref7 ? ++ac : --ac) {
                          r = _.random(0, 7);
                          if (r === 0) {
                            a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 1) {
                            a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 2) {
                            a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 3) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 4) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 5) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 6) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 7) {
                            a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                        }
                      }
                      if (dimension > 1) {
                        finBucle = 1;
                        if (dimension === 3) {
                          finBucle = 3;
                        }
                        if (dimension === 4) {
                          finBucle = 4;
                        }
                        a = "";
                        for (yy = ad = 0, ref8 = finBucle; 0 <= ref8 ? ad <= ref8 : ad >= ref8; yy = 0 <= ref8 ? ++ad : --ad) {
                          r = _.random(0, 15);
                          if (r === 0) {
                            a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 1) {
                            a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 2) {
                            a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 3) {
                            a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 4) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 5) {
                            a += "<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 6) {
                            a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 7) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 8) {
                            a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 9) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 10) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 11) {
                            a += "<tr><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 12) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td></tr>";
                          }
                          if (r === 13) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 14) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                          if (r === 15) {
                            a += "<tr><td bgcolor=\"#0000FF\">&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td><td>&nbsp;</td><td bgcolor=\"#0000FF\">&nbsp;</td></tr>";
                          }
                        }
                      }
                      matrices[xx] = "<table border=\"1\" style=\"border-collapse: collapse; border: 1px solid black;\">" + a + "</table>";
                    }
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = matrices;
                  }
                  break;
                case 6:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    matrizCarasImagen = [];
                    nombresHombre = window.nombresHombre;
                    nombresMujer = window.nombresMujer;
                    nombresHombre.sort((function(_this) {
                      return function() {
                        return 0.5 - Math.random();
                      };
                    })(this));
                    nombresMujer.sort((function(_this) {
                      return function() {
                        return 0.5 - Math.random();
                      };
                    })(this));
                    yy = 0;
                    jj = 0;
                    kk = 0;
                    for (xx = ae = 1; ae <= 100; xx = ++ae) {
                      if (yy === 241) {
                        yy = 0;
                      }
                      if (jj === 271) {
                        jj = 0;
                      }
                      ceros = "";
                      if (xx < 10) {
                        ceros = "000";
                      } else if (xx < 100) {
                        ceros = "00";
                      } else if (xx < 1000) {
                        ceros = "0";
                      }
                      matrizCarasImagen[kk] = "<div><img src=\"/caras/1-" + ceros + xx + ".jpg\" width=\"100px\" height=\"100px\"><br>" + nombresHombre[yy] + "</div>";
                      matrizCarasImagen[kk + 1] = "<div><img src=\"/caras/2-" + ceros + xx + ".jpg\" width=\"100px\" height=\"100px\"><br>" + nombresMujer[jj] + "</div>";
                      yy++;
                      jj++;
                      kk += 2;
                    }
                    matrizCarasImagen.sort((function(_this) {
                      return function() {
                        return 0.5 - Math.random();
                      };
                    })(this));
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = matrizCarasImagen;
                  }
                  break;
                case 7:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    matrizAbstractas = [];
                    for (xx = af = 1; af <= 200; xx = ++af) {
                      matrizAbstractas[xx - 1] = "<img src=\"/abstractas/image-" + xx + ".png\">";
                    }
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = matrizAbstractas;
                  }
                  break;
                case 8:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    matrizFechas = [];
                    for (xx = ag = 0; ag <= 100; xx = ++ag) {
                      myDate = this.randomDate(new Date(1000, 0, 1), new Date(2099, 0, 1));
                      month = myDate.getMonth();
                      fullYear = myDate.getFullYear();
                      day = myDate.getDay();
                      date = myDate.getDate();
                      year = myDate.getYear();
                      matrizFechas[xx] = "<h3>" + date + " - " + window.MONTH[month][1] + " - " + fullYear + "</h3>";
                    }
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = matrizFechas;
                  }
                  break;
                case 9:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = window.paises;
                  }
                  break;
                case 10:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    str = $("#simbolitos").html();
                    res = str.split(" ");
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = res;
                  }
                  break;
                case 11:
                  this.mixTiempos[zzz] = $("#tm" + randomMix).val();
                  if (typeof memoMixArray[randomMix] === "undefined") {
                    str = $("#palabras1").html();
                    res = str.split(" ");
                    memoMixArray[randomMix] = [];
                    memoMixArray[randomMix] = res;
                  }
              }
              rnd = _.random(0, memoMixArray[randomMix].length - 1);
              this.memoriaM2[zzz] = memoMixArray[randomMix][rnd];
              memoMixArray[randomMix] = _.without(memoMixArray[randomMix], this.memoriaM2[zzz]);
            }
        }
        if (this.ejercicioSeleccionadoMemoria !== 12) {
          this.memoriaM2.sort((function(_this) {
            return function() {
              return 0.5 - Math.random();
            };
          })(this));
          this.memoriaM2Elegidas = _.first(this.memoriaM2, cantidad);
          noEsta = [];
          noEsta = _.difference(this.memoriaM2, this.memoriaM2Elegidas);
          this.noEsta1 = noEsta[_.random(0, noEsta.length - 1)];
        } else {
          this.memoriaM2Elegidas = _.first(this.memoriaM2, cantidad);
          this.noEsta1 = this.memoriaM2[cantidad];
        }
        poner = "";
        if (this.ejercicioSeleccionadoMemoria === 1 || this.ejercicioSeleccionadoMemoria === 4 || this.ejercicioSeleccionadoMemoria === 6 || this.ejercicioSeleccionadoMemoria === 7) {
          for (xx = ah = 0, ref9 = this.memoriaM2Elegidas.length - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; xx = 0 <= ref9 ? ++ah : --ah) {
            poner += "" + this.memoriaM2Elegidas[xx];
          }
          poner += "" + this.noEsta1;
          $("#preload").html(poner);
          $("#preload").css("zoom", "0.1");
        }
        $("#screen").html("<center><h4>" + this.segundos + "</h4></center>");
        this.tiempo2();
        setTimeout(((function(_this) {
          return function() {
            return _this.memoria2();
          };
        })(this)), parseInt(parseInt($("#tiempoPreparacion").val())) * 1000 + 100);
        this.memoriaJugadas++;
        return;
      }
      cantidad = this.cantidad1;
      if (this.memoriaJugadas < cantidad) {
        if (this.entrarMemoria === 0) {
          this.memoriaJugadas = 0;
          this.entrarMemoria = 1;
          clearInterval(this.killTimeout6);
          $("#screen").html("");
        }
        if (this.ejercicioSeleccionado === 12) {
          if (!$("#constantMixTime").is(':checked')) {
            this.tiempoEjercicioInicial = parseInt(this.mixTiempos[this.memoriaJugadas]);
            this.tiempoEjercicios[7][0] = this.tiempoEjercicioInicial;
          }
        }
        if (!this.constantTime) {
          if (this.memoriaJugadas === 3) {
            this.tiempoEjercicios[7][0] = this.tiempoEjercicioInicial * 0.8;
          }
          if (this.memoriaJugadas === 6) {
            this.tiempoEjercicios[7][0] = this.tiempoEjercicioInicial * 0.6;
          }
          if (this.memoriaJugadas === 9) {
            this.tiempoEjercicios[7][0] = this.tiempoEjercicioInicial * 0.4;
          }
          if (this.memoriaJugadas === 12) {
            this.tiempoEjercicios[7][0] = this.tiempoEjercicioInicial * 0.2;
          }
        }
        botonSiguiente = "";
        if ($("#noTime").is(':checked')) {
          botonSiguiente = "<input type=\"button\" name=\"next\" value=\"next\" id=\"nextMemoObjectBtn\">";
        }
        $("#screen").html("<center><b>" + this.countMemoria2 + "</b></center>\n\n<div style=\"zoom: 1.5;\"><center><h1>" + this.memoriaM2Elegidas[this.memoriaJugadas] + "</h1></center></div><br>\n\n<center>" + botonSiguiente + "</center>\n");
        $(".table-memo td").css("width", "15px");
        $(".table-memo td").css("height", "15px");
        this.memoriaJugadas++;
        this.countMemoria2++;
        if ($("#noTime").is(':checked')) {
          $("#nextMemoObjectBtn").click((function(_this) {
            return function() {
              return _this.memoria2();
            };
          })(this));
        } else {
          return this.killTimeout = setTimeout(((function(_this) {
            return function() {
              $("#screen").html("");
              console.log("pausa 200ms");
              return _this.killTimeout = setTimeout((function() {
                return _this.memoria2();
              }), 200);
            };
          })(this)), this.tiempoEjercicios[7][0]);
        }
      } else {
        $("noTimeModeDiv").hide();
        if ($("#fastMode1").is(':checked')) {
          esta = [];
          esta = this.memoriaM2Elegidas[_.random(0, this.memoriaM2Elegidas.length - 1)];
          noEsta = this.noEsta1;
          busca = _.random(0, 1);
          figura = "";
          css = "";
          css1 = "";
          if (busca) {
            figura = "<div id=\"myUp\" class=\"circle\">";
            css = "background";
            css1 = "" + this.alfabeto[_.random(0, 25)][1];
            this.resultado = true;
          } else {
            figura = "<div id=\"myUp\" class=\"up\">";
            css = "border-color";
            css1 = "transparent transparent " + this.alfabeto[_.random(0, 25)][1] + " transparent";
            this.resultado = false;
          }
          lado = _.random(0, 1);
          if (lado) {
            izq = noEsta;
            der = esta;
            if (busca) {
              this.resultado = false;
            } else {
              this.resultado = true;
            }
          } else {
            izq = esta;
            der = noEsta;
            if (busca) {
              this.resultado = true;
            } else {
              this.resultado = false;
            }
          }
          zoomFigure = 1;
          if (this.esMobil) {
            zoomFigure = 0.5;
          }
          $("#screen").html("<center>			\n	<table>\n		<tr><td>\n			<div><h4>" + izq + "</h4></div>\n			</td>\n			<td>\n				<div style=\"zoom: " + zoomFigure + ";\"><div>" + figura + "</div></div>\n			</td>\n			<td>\n				<div><h4>" + der + "</h4></div>\n			</td>\n		</tr>\n	</table>\n</center>\n\n\n");
          $("#myUp").css(css, css1);
          this.t_ini = Date.now();
          this.pausa = 0;
          return this.killTimeout1 = setTimeout(((function(_this) {
            return function() {
              return _this.checkPosicion(3);
            };
          })(this)), this.tiempoEjercicios[7][1]);
        } else {
          possible = "BCDFGHJKLMNPQRSTVWXYZ";
          possible1 = "AEIOU";
          this.nombreRandom = possible.charAt(_.random(0, possible.length - 1)) + possible1.charAt(_.random(0, possible1.length - 1)) + possible.charAt(_.random(0, possible.length - 1));
          this.pausa = 0;
          this.estado = 1;
          this.resultado = true;
          memoriaM2Mezcladas = _.first(this.memoriaM2Elegidas, this.memoriaM2Elegidas.length);
          memoriaM2Mezcladas.sort((function(_this) {
            return function() {
              return 0.5 - Math.random();
            };
          })(this));
          console.log(this.memoriaM2Elegidas);
          console.log(memoriaM2Mezcladas);
          a = "";
          salida = "<div>";
          for (i = ai = 0, ref10 = this.memoriaM2Elegidas.length - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; i = 0 <= ref10 ? ++ai : --ai) {
            salida += "<div  style=\"float:left;\"><center><b>" + (i + 1) + "</b></center><br><div class=\"image-dropdown\" >";
            for (j = aj = 0, ref11 = memoriaM2Mezcladas.length - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
              for (ii = ak = 0, ref12 = this.memoriaM2Elegidas.length - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; ii = 0 <= ref12 ? ++ak : --ak) {
                if (memoriaM2Mezcladas[j] === this.memoriaM2Elegidas[ii]) {
                  break;
                }
              }
              if (j === 0) {
                salida += "<input  type=\"radio\" id=\"line" + i + "_" + j + "\" name=\"" + this.nombreRandom + "_" + i + "\" value=\"" + ii + "\" checked=\"checked\" style=\"zoom: 120%\"><label>" + memoriaM2Mezcladas[j] + "</label><br>";
              } else {
                salida += "<input type=\"radio\" id=\"line" + i + "_" + j + "\" name=\"" + this.nombreRandom + "_" + i + "\" value=\"" + ii + "\"   style=\"zoom: 120%\"><label>" + memoriaM2Mezcladas[j] + "</label><br>";
              }
            }
            salida += "</div></div>";
            if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14 || i === 17 || i === 20 || i === 23) {
              salida += "<div style=\"clear:both\"></div>";
            }
          }
          salida += "</div>";
          $("#screen").html("\n<center>		\n<div><input type=\"button\" value=\"Check\" id=\"chequear\"></div>	\n " + salida + "\n</center>");
          $("#chequear").click((function(_this) {
            return function() {
              var al, am, matriz, myVal, ref13, ref14;
              matriz = [];
              for (i = al = 0, ref13 = _this.memoriaM2Elegidas.length - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; i = 0 <= ref13 ? ++al : --al) {
                myVal = $("input[name=" + _this.nombreRandom + "_" + i + "]:checked").val();
                matriz[i] = myVal;
                console.log(_this.cantidad1 + "|" + i + "|" + myVal);
              }
              for (i = am = 0, ref14 = matriz.length - 1; 0 <= ref14 ? am <= ref14 : am >= ref14; i = 0 <= ref14 ? ++am : --am) {
                if (i !== parseInt(matriz[i])) {
                  _this.checkPosicion(false);
                }
              }
              return _this.checkPosicion(true);
            };
          })(this));
          return this.killTimeout1 = setTimeout(((function(_this) {
            return function() {
              return _this.checkPosicion(3);
            };
          })(this)), $("#tiempoRespuestaMemoria").val());
        }
      }
    };

    motorReaction.prototype.wordToNumber = function(x) {
      if (window.bWtoN) {
        return this.wToN[x];
      } else {
        return x;
      }
    };

    motorReaction.prototype.multiplicacion = function() {
      var _r1, _r2, goFocusCheckbox, i, imprimir, m, o, p, ponerWToN, q, ref, ref1, ref2, ref3, rnd, signoImprimir, sinestesiaHtml, t, u, x;
      this.pausa = 0;
      imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\">";
      this.tMulti = [];
      this.tMultiFila = [];
      this.resultado1 = 0;
      this.cMulti = n("cifrasMultiplicacion");
      goFocusCheckbox = 0;
      this.wToN = _.shuffle(window.palabras);
      ponerWToN = "<div id=\"listWords\" > ";
      for (i = m = 0; m <= 9; i = ++m) {
        ponerWToN += "<br> " + i + " " + this.wToN[i];
      }
      ponerWToN += "\"</div> <br> <a href=\"#\" onclick=\"element='#listWords'; if($(element).is(':visible')){  $(element).hide();  }else{ $(element).show(); } \">hide/show</a> <br> ";
      if (this.cMulti > 10 && !$("#multiSinestesia").is(':checked')) {
        imprimir += "<tr>";
        for (i = o = 0, ref = this.cMulti * 2 - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
          imprimir += "<td><center>" + (this.cMulti * 2 - i) + "</center></td>";
        }
        imprimir += "</tr>";
      }
      for (x = p = 0; p <= 2; x = ++p) {
        imprimir += "<tr>";
        this.tMulti[x] = [];
        this.tMultiFila[x] = "";
        for (i = q = 0, ref1 = this.cMulti * 2 - 1; 0 <= ref1 ? q <= ref1 : q >= ref1; i = 0 <= ref1 ? ++q : --q) {
          if (i > this.cMulti - 1 && x > 0) {
            rnd = _.random(1, 9);
            this.tMulti[x][i] = rnd;
            this.tMultiFila[x] += rnd.toString();
            imprimir += "<td class=\"columna" + i + " num" + this.tMulti[x][i] + " myColumna\"><center>" + (this.wordToNumber(this.tMulti[x][i])) + "</center></td> ";
          } else {
            signoImprimir = "";
            if (x === 2 && i === 0) {
              signoImprimir = "x";
            }
            if (x === 0 && i > this.cMulti - 1) {
              signoImprimir = "<input type=\"checkbox\" onclick=\"$('#campo" + goFocusCheckbox + "').focus();\"> ";
              goFocusCheckbox++;
            }
            imprimir += "<td class=\"columna" + i + "\"><center>" + signoImprimir + "</center></td> ";
          }
        }
        imprimir += "</tr>";
      }
      _r1 = BigInteger(this.tMultiFila[1]);
      _r2 = BigInteger(this.tMultiFila[2]);
      console.log("tMultiFila");
      console.log(this.tMultiFila[1]);
      console.log(this.tMultiFila[2]);
      this.resultado1 = BigInteger(_r1).multiply(_r2);
      console.log(this.resultado1.toString());
      this._tR = this.tMultiFila[1] + "*" + this.tMultiFila[2];
      if (this.resultado1.toString().length !== this.cMulti * 2) {
        this.multiplicacion();
        console.log("incorrect length");
        return;
      }
      imprimir += "<tr>";
      for (x = t = 0, ref2 = this.cMulti * 2 - 1; 0 <= ref2 ? t <= ref2 : t >= ref2; x = 0 <= ref2 ? ++t : --t) {
        imprimir += "<td class=\"columna" + i + "\"><input type=\"number\" value=\"\" id=\"campo" + x + "\" style=\"width: 38px;  text-align: center;\"></td>";
      }
      imprimir += "</tr>";
      imprimir += "</table>";
      sinestesiaHtml = "";
      if ($("#multiSinestesia").is(':checked')) {
        sinestesiaHtml = "<center><div id=\"output1\">\n<span class=\"num0-1\" style=\"color: rgb(0,0,180)\"><b>0</b></span>\n<span class=\"num1-1\" style=\"color: rgb(175,13,102)\"><b>1</b></span>\n<span class=\"num2-1\" style=\"color: rgb(146,248,70)\"><b>2</b></span>\n<span class=\"num3-1\" style=\"color: rgb(255,200,47)\"><b>3</b></span>\n<span class=\"num4-1\" style=\"color: rgb(255,118,0)\"><b>4</b></span>\n<span class=\"num5-1\" style=\"color: rgb(255,152,213)\"><b>5</b></span>\n<span class=\"num6-1\" style=\"color: rgb(235,235,222)\"><b>6</b></span>\n<span class=\"num7-1\" style=\"color: rgb(100,100,100)\"><b>7</b></span>\n<span class=\"num8-1\" style=\"color: rgb(255,255,0)\"><b>8</b></span>\n<span class=\"num9-1\" style=\"color: rgb(255,255,150)\"><b>9</b></span>			\n</div></center>\n<a href=\"#cm2\" onclick=\"$('#div-configurar').show();\">[customColors]</a>\n<br>\n";
      }
      if (!window.bWtoN) {
        ponerWToN = "";
      }
      $("#screen").html(sinestesiaHtml + "\n\n<center>\n	" + ponerWToN + "\n	<div id=\"multiplicacionScreen\">" + imprimir + "</div>\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterMulti\">\n\n</center>\n\n");
      this.t_ini = Date.now();
      if (this.cMulti > 10) {
        $("#multiplicacionScreen").css("zoom", "0.8");
      }
      $(".columna" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).focus();
      $("#enterMulti").click((function(_this) {
        return function() {
          var myL, myResult, ref3, u;
          myResult = "";
          for (i = u = 0, ref3 = _this.cMulti * 2 - 1; 0 <= ref3 ? u <= ref3 : u >= ref3; i = 0 <= ref3 ? ++u : --u) {
            myResult += $("#campo" + i).val();
          }
          console.log(">" + myResult);
          myL = (myResult + "").length;
          if (myL !== _this.cMulti * 2) {
            myResult = "0" + myResult;
          }
          _this.resultadosList = _this._tR + " = " + myResult + "(su valor)" + " la respuesta es " + (_this.resultado1.compare(myResult) === 0 ? "correcta" : " en realidad <br> =" + _this.resultado1.toString()) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (_this.resultado1.compare(myResult) === 0) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      for (x = u = 0, ref3 = this.cMulti * 2 - 1; 0 <= ref3 ? u <= ref3 : u >= ref3; x = 0 <= ref3 ? ++u : --u) {
        eval("$(\"#campo" + x + "\").click(function() {\n	\n	for(j=0;j<" + (this.cMulti * 2) + ";j++){\n\n		if( ! $(\"#multiSinestesia\").is(':checked') ){\n			$(\".columna\"+j).css(\"background-color\",\"white\");\n			$(\"#campo\"+j).css(\"background-color\",\"white\");\n		}\n		\n\n	}\n	if( ! $(\"#multiSinestesia\").is(':checked') ){\n		if( n(\"memoTime\") > 0)\n			return;\n 		$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 		$(\"#campo" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 	}\n 	\n\n});\n");
        eval("\n$(\"#campo" + x + "\").change(function() {\n\n	 myStr = \"" + (this.resultado1.toString()) + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n	 console.log(myStr);\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		//alert($(\"#campo" + x + "\").val());\n		$(\"#campo" + x + "\").css(\"background-color\",\"red\");\n		$('#campo" + x + "').focus();\n		$('#campo" + x + "').val(\"\");\n\n		setTimeout(function(){\n				if(" + x + ">0){\n					\n					$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"white\");\n				\n					if( ! $(\"#multiSinestesia\").is(':checked') ){\n						$(\".columna" + (x - 1) + "\").css(\"background-color\",\"white\");\n						\n						if( n(\"memoTime\") > 0)\n							return;\n						$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n						\n\n					}\n				\n\n				}\n				\n			},1);\n	\n\n	}else{\n\n\n		if (" + x + "!=0 ){\n		\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n\n				if( ! $(\"#multiSinestesia\").is(':checked') ){\n					$(\".columna\"+j).css(\"background-color\",\"white\");\n					$(\"#campo\"+j).css(\"background-color\",\"white\");\n				}\n\n			}\n\n			$('#campo" + (x - 1) + "').focus();\n\n			if( ! $(\"#multiSinestesia\").is(':checked') ){\n				if( n(\"memoTime\") > 0)\n					return;\n				$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n			 	$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n			}\n\n		}else{\n\n			myResult = \"\";\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n				myResult += $(\"#campo\"+j).val();\n\n			}\n\n			if(parseInt(myResult) == parseInt(" + (this.resultado1.toString()) + ")){\n				window.juegoReaction.checkPosicion(true);\n			}else{\n				window.juegoReaction.checkPosicion(false);\n			}\n\n		}\n		if( $(\"#multiSinestesia\").is(':checked') ){\n			myCampoVal=parseInt($('#campo" + x + "').val());\n			\n			//arrCol=[\"rgb(0,0,180)\",\"rgb(175,13,102)\",\"rgb(146,248,70)\",\"rgb(255,200,47)\",\"rgb(255,118,0)\",\"rgb(255,152,213)\",\"rgb(235,235,222)\",\"rgb(100,100,100)\",\"rgb(255,255,0)\",\"rgb(255,255,150)\"];\n\n			$(\"#campo" + x + "\").css(\"background-color\",arrCol[myCampoVal]);\n			$(\"#campo" + x + "\").css(\"color\",arrCol[myCampoVal]);\n\n\n		}\n\n		\n	}\n\n\n  \n});\n\n$(\"#campo" + x + "\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			myResult += $(\"#campo\"+j).val();\n\n		}\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + myResult + \"(su valor)\" + \" la respuesta es \" + (  ( BigInteger(\"" + (this.resultado1.toString()) + "\").compare(myResult) == 0 ) ? \"correcta\" : \" en realidad <br> =\" + window.juegoReaction.resultado1.toString() ) + \"<br>\" + window.juegoReaction.resultadosList;\n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if( BigInteger(\"" + (this.resultado1.toString()) + "\").compare(myResult) == 0 ){\n			window.juegoReaction.checkPosicion(true);\n\n\n		}else{\n			window.juegoReaction.checkPosicion(false);\n	\n\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n\n	  \n\n	  		/*\n\n	 myStr = \"" + (this.resultado1.toString()) + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		alert($(\"#campo" + x + "\").val());\n\n	}\n\n		*/\n\n	if (" + x + "!=0 ){\n		\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			if( ! $(\"#multiSinestesia\").is(':checked') ){\n				$(\".columna\"+j).css(\"background-color\",\"white\");\n				$(\"#campo\"+j).css(\"background-color\",\"white\");\n			}\n			\n\n		}\n\n		$('#campo" + (x - 1) + "').focus();\n		if( ! $(\"#multiSinestesia\").is(':checked') ){\n			if( n(\"memoTime\") > 0)\n				return;\n			$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n			$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n		}\n	 \n\n	}\n  \n});");
      }
      if ($("#multiSinestesia").is(':checked')) {
        eval("\n$(\".num0-1\").css(\"color\",arrCol[0]);\n\n$(\".num1\").css(\"background-color\",arrCol[1]);\n			 		$(\".num1\").css(\"color\",arrCol[1]);\n			 		$(\".num1-1\").css(\"color\",arrCol[1]);\n\n			 		$(\".num2\").css(\"background-color\",arrCol[2]);\n			 		$(\".num2\").css(\"color\",arrCol[2]);\n			 		$(\".num2-1\").css(\"color\",arrCol[2]);\n\n			 		$(\".num3\").css(\"background-color\",arrCol[3]);\n			 		$(\".num3\").css(\"color\",arrCol[3]);\n			 		$(\".num3-1\").css(\"color\",arrCol[3]);\n\n			 		$(\".num4\").css(\"background-color\",arrCol[4]);\n			 		$(\".num4\").css(\"color\",arrCol[4]);\n			 		$(\".num4-1\").css(\"color\",arrCol[4]);\n\n			 		$(\".num5\").css(\"background-color\",arrCol[5]);\n			 		$(\".num5\").css(\"color\",arrCol[5]);\n			 		$(\".num5-1\").css(\"color\",arrCol[5]);\n\n			 		$(\".num6\").css(\"background-color\",arrCol[6]);\n			 		$(\".num6\").css(\"color\",arrCol[6]);\n			 		$(\".num6-1\").css(\"color\",arrCol[6]);\n\n			 		$(\".num7\").css(\"background-color\",arrCol[7]);\n			 		$(\".num7\").css(\"color\",arrCol[7]);\n			 		$(\".num7-1\").css(\"color\",arrCol[7]);\n\n			 		$(\".num8\").css(\"background-color\",arrCol[8]);\n			 		$(\".num8\").css(\"color\",arrCol[8]);\n			 		$(\".num8-1\").css(\"color\",arrCol[8]);\n\n			 		$(\".num9\").css(\"background-color\",arrCol[9]);\n			 		$(\".num9\").css(\"color\",arrCol[9]);\n			 		$(\".num9-1\").css(\"color\",arrCol[9]);\n			 		\n			 		/*		\n			 		$(\".num1\").css(\"background-color\",\"rgb(175,13,102)\");\n			 		$(\".num1\").css(\"color\",\"rgb(175,13,102)\");\n\n			 		$(\".num2\").css(\"background-color\",\"rgb(146,248,70)\");\n			 		$(\".num2\").css(\"color\",\"rgb(146,248,70)\");\n\n			 		$(\".num3\").css(\"background-color\",\"rgb(255,200,47)\");\n			 		$(\".num3\").css(\"color\",\"rgb(255,200,47)\");\n\n			 		$(\".num4\").css(\"background-color\",\"rgb(255,118,0)\");\n			 		$(\".num4\").css(\"color\",\"rgb(255,118,0)\");\n\n			 		$(\".num5\").css(\"background-color\",\"rgb(255,152,213)\");\n			 		$(\".num5\").css(\"color\",\"rgb(255,152,213)\");\n\n			 		$(\".num6\").css(\"background-color\",\"rgb(235,235,222)\");\n			 		$(\".num6\").css(\"color\",\"rgb(235,235,222)\");\n\n			 		$(\".num7\").css(\"background-color\",\"rgb(100,100,100)\");\n			 		$(\".num7\").css(\"color\",\"rgb(100,100,100)\");\n\n			 		$(\".num8\").css(\"background-color\",\"rgb(255,255,0)\");\n			 		$(\".num8\").css(\"color\",\"rgb(255,255,0)\");\n\n			 		$(\".num9\").css(\"background-color\",\"rgb(255,255,150)\");\n			 		$(\".num9\").css(\"color\",\"rgb(255,255,150)\");\n			 		*/\n");
      }
      if (n("memoTime") > 0) {
        this.killTimeout = setTimeout(((function(_this) {
          return function() {
            return eval("\n$(\".myColumna\").css(\"background-color\",\"white\");\n					 	$(\".myColumna\").css(\"color\",\"white\");\n");
          };
        })(this)), n("memoTime"));
      }
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[18][1]);
        };
      })(this)), this.tiempoEjercicios[18][0]);
    };

    motorReaction.prototype.resta = function() {
      var goFocusCheckbox, i, imprimir, m, myL, o, p, q, ref, ref1, ref2, rnd, signoImprimir, x;
      while (true) {
        this.pausa = 0;
        this.tMulti = [];
        this.tMultiFila = [];
        this.resultado1 = 0;
        this.cMulti = 8;
        goFocusCheckbox = 0;
        imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\">";
        for (x = m = 0; m <= 2; x = ++m) {
          imprimir += "<tr>";
          this.tMulti[x] = [];
          this.tMultiFila[x] = "";
          for (i = o = 0, ref = this.cMulti * 2 - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
            if (i > this.cMulti - 1 && x > 0) {
              rnd = _.random(1, 9);
              this.tMulti[x][i] = rnd;
              this.tMultiFila[x] += rnd.toString();
              imprimir += "<td class=\"columna" + i + "\"><center>" + this.tMulti[x][i] + "</center></td> ";
            } else {
              signoImprimir = "";
              if (x === 2 && i === 0) {
                signoImprimir = "-";
              }
              if (x === 0 && i > this.cMulti - 1) {
                signoImprimir = "<input type=\"checkbox\" onclick=\"$('#campo" + goFocusCheckbox + "').focus();\"> ";
                goFocusCheckbox++;
              }
              imprimir += "<td class=\"columna" + i + "\"><center>" + signoImprimir + "</center></td> ";
            }
          }
          imprimir += "</tr>";
        }
        console.log(this.tMultiFila[1] + "-" + this.tMultiFila[2]);
        this.resultado1 = parseInt(this.tMultiFila[1]) - parseInt(this.tMultiFila[2]);
        this._tR = "<br><br>" + this.tMultiFila[1] + "-" + this.tMultiFila[2] + "<br>";
        if (this.resultado1 > 0) {
          break;
        }
      }
      myL = (this.resultado1 + "").length;
      console.log(this.resultado1);
      imprimir += "<tr>";
      for (x = p = 0, ref1 = this.cMulti * 2 - 1; 0 <= ref1 ? p <= ref1 : p >= ref1; x = 0 <= ref1 ? ++p : --p) {
        imprimir += "<td class=\"columna" + i + "\"><input type=\"number\" value=\"\" id=\"campo" + x + "\" style=\"width: 38px;  text-align: center;\"></td>";
      }
      imprimir += "</tr>";
      imprimir += "</table>";
      $("#screen").html("\n<center>\n	" + imprimir + "\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterMulti\">\n\n</center>\n\n");
      this.t_ini = Date.now();
      $(".columna" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).focus();
      $("#enterMulti").click((function(_this) {
        return function() {
          var myResult, q, ref2;
          myResult = "";
          for (i = q = 0, ref2 = _this.cMulti * 2 - 1; 0 <= ref2 ? q <= ref2 : q >= ref2; i = 0 <= ref2 ? ++q : --q) {
            myResult += $("#campo" + i).val();
          }
          console.log(">" + myResult);
          _this.resultadosList = _this._tR + " = " + myResult + "(su valor)" + " la respuesta es " + (parseInt(myResult) === parseInt(_this.resultado1) || -parseInt(myResult) === parseInt(_this.resultado1) ? "correcta" : " en realidad <br> =" + _this.resultado1) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (parseInt(myResult) === parseInt(_this.resultado1) || -parseInt(myResult) === parseInt(_this.resultado1)) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      for (x = q = 0, ref2 = this.cMulti * 2 - 1; 0 <= ref2 ? q <= ref2 : q >= ref2; x = 0 <= ref2 ? ++q : --q) {
        eval("$(\"#campo" + x + "\").click(function() {\n	\n	for(j=0;j<" + (this.cMulti * 2) + ";j++){\n		$(\".columna\"+j).css(\"background-color\",\"white\");\n		$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n	}\n 	$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 	$(\"#campo" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n});\n");
        eval("\n$(\"#campo" + x + "\").change(function() {\n\n	/*\n\n	 myStr = \"" + this.resultado1 + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		//alert($(\"#campo" + x + "\").val());\n		$(\"#campo" + x + "\").css(\"background-color\",\"red\");\n		$('#campo" + x + "').focus();\n		$('#campo" + x + "').val(\"\");\n\n	}else{\n\n		\n\n		if (" + x + "!=0 ){\n		\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n				$(\".columna\"+j).css(\"background-color\",\"white\");\n				$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n			}\n\n			$('#campo" + (x - 1) + "').focus();\n			$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n		 	$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n\n		}else{\n\n			myResult = \"\";\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n				myResult += $(\"#campo\"+j).val();\n\n			}\n\n			if(parseInt(myResult) == " + this.resultado1 + "){\n				window.juegoReaction.checkPosicion(true);\n\n\n			}else{\n				window.juegoReaction.checkPosicion(false);\n		\n\n			}\n\n\n		}\n\n		\n	}*/\n  \n});\n\n$(\"#campo" + x + "\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			myResult += $(\"#campo\"+j).val();\n\n		}\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + myResult + \"(su valor)\" + \" la respuesta es \" + ( (parseInt(myResult) == parseInt(\"" + this.resultado1 + "\") || -parseInt(myResult) == parseInt(\"" + this.resultado1 + "\")) ? \"correcta\" : \" en realidad <br> =\" + window.juegoReaction.resultado1 ) + \"<br>\" + window.juegoReaction.resultadosList;\n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt(myResult) == parseInt(\"" + this.resultado1 + "\") || -parseInt(myResult) == parseInt(\"" + this.resultado1 + "\")){\n			window.juegoReaction.checkPosicion(true);\n\n\n		}else{\n			window.juegoReaction.checkPosicion(false);\n	\n\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n\n	  \n\n	  		/*\n\n	 myStr = \"" + this.resultado1 + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		alert($(\"#campo" + x + "\").val());\n\n	}\n\n		*/\n\n	if (" + x + "!=0 ){\n		\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			$(\".columna\"+j).css(\"background-color\",\"white\");\n			$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n		}\n\n		$('#campo" + (x - 1) + "').focus();\n		$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n	 	$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n\n	}\n  \n});");
      }
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[18][1]);
        };
      })(this)), this.tiempoEjercicios[18][0]);
    };

    motorReaction.prototype.suma100 = function() {
      var i, imprimir, m, o, rnd, totalSuma, x;
      this.pausa = 0;
      imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\" id=\"operation-table\">";
      this.tSuma = [];
      this.tSumaFila = [];
      this.resultado1 = 0;
      totalSuma = 0;
      for (x = m = 0; m <= 9; x = ++m) {
        imprimir += "<tr>";
        this.tSuma[x] = [];
        this.tSumaFila[x] = "";
        for (i = o = 0; o <= 9; i = ++o) {
          rnd = _.random(1, 9);
          totalSuma += rnd;
          this.tSuma[x][i] = rnd;
          this.tSumaFila[x] += rnd.toString();
          imprimir += "<td class=\"columna" + i + "\"><center>" + this.tSuma[x][i] + "</center></td> ";
        }
        imprimir += "</tr>";
      }
      this.resultado1 = totalSuma;
      console.log(this.resultado1);
      imprimir += "<tr>";
      imprimir += "<td class=\"columna" + i + "\" colspan=\"10\"><center><input type=\"number\" value=\"\" id=\"resultadoSuma\" style=\"width: 38px;  text-align: center;\"></center></td>";
      imprimir += "</tr>";
      imprimir += "</table>";
      $("#screen").html("\n<center>\n	" + imprimir + "\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterSuma\">\n\n</center>\n\n");
      if (this.esMobil) {
        $('#operation-table').css("zoom", "80%");
        console.log("zoom table changed");
      }
      this.t_ini = Date.now();
      $(".columna10").css("background-color", "rgb(235,235,222)");
      $("#campo10").css("background-color", "rgb(235,235,222)");
      $('#campo10').focus();
      $("#enterSuma").click((function(_this) {
        return function() {
          var myResult;
          myResult = "";
          myResult = $("#resultadoSuma").val();
          console.log(">" + myResult);
          if (parseInt(myResult) === _this.resultado1) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      eval("\n$(\"#resultadoSuma\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n	\n		myResult += $(\"#resultadoSuma\").val();\n\n		if(parseInt(myResult) == " + this.resultado1 + "){\n			window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n  \n});\n\n$('#resultadoSuma').focus();");
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[17][1]);
        };
      })(this)), this.tiempoEjercicios[17][0]);
    };

    motorReaction.prototype.suma = function() {
      var i, imprimir, m, o, p, q, rnd, signoImprimir, x;
      this.pausa = 0;
      imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\" id=\"operation-table\">";
      this.tSuma = [];
      this.tSumaFila = [];
      this.resultado1 = 0;
      this._tR = "<br>";
      for (x = m = 0; m <= 9; x = ++m) {
        imprimir += "<tr>";
        this.tSuma[x] = [];
        this.tSumaFila[x] = "";
        for (i = o = 0; o <= 10; i = ++o) {
          if (i !== 0) {
            rnd = _.random(1, 9);
            this.tSuma[x][i] = rnd;
            this.tSumaFila[x] += rnd.toString();
            imprimir += "<td class=\"columna" + i + "\"><center>" + this.tSuma[x][i] + "</center></td> ";
          } else {
            signoImprimir = "";
            if (x === 9) {
              signoImprimir = "+";
            }
            imprimir += "<td class=\"columna" + i + "\"><center>" + signoImprimir + "</center></td> ";
          }
        }
        imprimir += "</tr>";
        this._tR += "+" + parseInt(this.tSumaFila[x]) + "<br>";
        this.resultado1 += parseInt(this.tSumaFila[x]);
      }
      console.log(this.resultado1);
      this._tR1 = this.resultado1;
      imprimir += "<tr>";
      for (x = p = 0; p <= 10; x = ++p) {
        imprimir += "<td class=\"columna" + i + "\"><input type=\"number\" value=\"\" id=\"campo" + x + "\" style=\"width: 38px;  text-align: center;\"></td>";
      }
      imprimir += "</tr>";
      imprimir += "</table>";
      $("#screen").html("\n<center>\n	" + imprimir + "\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterSuma\">\n\n</center>\n\n");
      if (this.esMobil) {
        $('#operation-table').css("zoom", "80%");
        console.log("zoom table changed");
      }
      this.t_ini = Date.now();
      $(".columna10").css("background-color", "rgb(235,235,222)");
      $("#campo10").css("background-color", "rgb(235,235,222)");
      $('#campo10').focus();
      $("#enterSuma").click((function(_this) {
        return function() {
          var myResult, q;
          myResult = "";
          for (i = q = 0; q <= 10; i = ++q) {
            myResult += $("#campo" + i).val();
          }
          console.log(">" + myResult);
          _this.resultadosList = _this._tR + " = " + myResult + "(su valor)" + " la respuesta es " + (parseInt(myResult) === _this.resultado1 ? "correcta" : " en realidad <br> =" + _this.resultado1) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (parseInt(myResult) === _this.resultado1) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      for (x = q = 0; q <= 10; x = ++q) {
        eval("$(\"#campo" + x + "\").click(function() {\n	\n	for(j=0;j<11;j++){\n		$(\".columna\"+j).css(\"background-color\",\"white\");\n		$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n	}\n 	$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 	$(\"#campo" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n});\n");
        eval("\n$(\"#campo" + x + "\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n\n		for(j=0;j<11;j++){\n			myResult += $(\"#campo\"+j).val();\n\n		}\n\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + myResult + \"(su valor)\" + \" la respuesta es \" + ( parseInt(myResult) == window.juegoReaction.resultado1 ? \"correcta\" : \" en realidad <br> =\" + window.juegoReaction.resultado1 ) + \"<br>\" + window.juegoReaction.resultadosList;\n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt(myResult) == " + this.resultado1 + "){\n			window.juegoReaction.checkPosicion(true);\n\n\n		}else{\n			window.juegoReaction.checkPosicion(false);\n	\n\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n\n	if (" + x + "!=0 ){\n		\n\n		for(j=0;j<11;j++){\n			$(\".columna\"+j).css(\"background-color\",\"white\");\n			$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n		}\n		setTimeout(function(){\n			$('#campo" + (x - 1) + "').focus();\n			$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n	 		$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n\n\n		},10); \n		\n\n	}\n  \n});\n");
      }
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[17][1]);
        };
      })(this)), this.tiempoEjercicios[17][0]);
    };

    motorReaction.prototype.memoria = function() {
      var cambiar, height1, mostrar, rand, width1;
      this.pausa = 0;
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      if (this.jugadas === 0) {
        this.memoriaAnterior = _.random(0, this.memoriaM.length - 1);
        this.tipo = 2;
        this.resultado = true;
      }
      this.tipo = 0;
      cambiar = _.random(0, 1);
      if (cambiar) {
        rand = _.random(0, this.memoriaM.length - 1);
        if (rand === this.memoriaAnterior) {
          this.resultado = true;
        } else {
          this.memoriaAnterior = rand;
          this.resultado = false;
        }
      } else {
        this.resultado = true;
      }
      width1 = 70;
      height1 = 70;
      if (this.esMovil) {
        width1 = 200;
        height1 = 200;
      }
      mostrar = "<center><img src=\"" + this.memoriaM[this.memoriaAnterior] + "\" width=\"" + width1 + "\" height=\"" + height1 + "\" class=\"myImage\"></center>";
      $("#screen").html(mostrar);
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            if (_this.ojosPasadas === 1) {
              return _this.checkPosicion(_this.resultado);
            } else {
              return _this.checkPosicion(3);
            }
          }), _this.jugadas === 0 ? 0 : _this.tiempoEjercicios[5][1]);
        };
      })(this)), this.tiempoEjercicios[5][0]);
    };

    motorReaction.prototype.sinestesia = function() {
      var colorLetra, esVerdadero, m, modif, ponerCara, ponerLetra, randomPonerFace, seleccion, seleccion2, sinestesiaOpcion1, tieneVerdadero, xx;
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      this.pausa = 0;
      modif = [];
      for (xx = m = 0; m <= 25; xx = ++m) {
        modif[xx] = [];
        modif[xx][0] = "gif";
        modif[xx][1] = "";
        if (xx === 0) {
          modif[xx][1] = _.random(1, 4);
        }
        if (xx === 4) {
          modif[xx][1] = _.random(1, 4);
        }
        if (xx === 9) {
          modif[xx][0] = "png";
        }
        if (xx === 10) {
          modif[xx][0] = "png";
        }
        if (xx === 13) {
          modif[xx][1] = _.random(1, 4);
        }
        if (xx === 14) {
          modif[xx][1] = _.random(1, 4);
        }
        if (xx === 17) {
          modif[xx][1] = _.random(1, 4);
        }
        if (xx === 18) {
          modif[xx][1] = _.random(1, 4);
        }
        if (xx === 22) {
          modif[xx][0] = "png";
        }
        if (xx === 23) {
          modif[xx][0] = "png";
        }
        if (xx === 25) {
          modif[xx][0] = "png";
        }
      }
      tieneVerdadero = _.random(0, 1);
      esVerdadero = _.random(0, 1);
      $("#liveHelp").html(window.ayudaSinestesia);
      sinestesiaOpcion1 = parseInt($("#sinestesiaOpcion1").val());
      randomPonerFace = _.random(0, 1);
      if (parseInt($("#sinestesiaOpcion").val()) === 0) {
        tieneVerdadero = 1;
      }
      if (parseInt($("#sinestesiaOpcion").val()) === 1) {
        tieneVerdadero = 0;
      }
      if (esVerdadero) {
        colorLetra = "white";
        seleccion = _.random(0, 25);
        if (seleccion === 9 || seleccion === 16 || seleccion === 21 || seleccion === 6) {
          colorLetra = "black";
        }
        ponerLetra = " <p style=\"color:" + colorLetra + ";\">" + this.alfabeto[seleccion][0] + "<p>";
        if (sinestesiaOpcion1 === 0 || sinestesiaOpcion1 === 2) {
          ponerCara = "<p style=\"color:" + colorLetra + ";\"><img src=\"/emo/" + (this.alfabeto[seleccion][0].toLowerCase()) + modif[seleccion][1] + "." + modif[seleccion][0] + "\" width=\"64px\" height=\"64px\" style=\"z-index: 9999;\"\" class=\"img-sin\"><p>";
          if (sinestesiaOpcion1 === 2) {
            ponerLetra = ponerCara;
          }
          if (sinestesiaOpcion1 === 0 && _.random(0, 1)) {
            ponerLetra = ponerCara;
          }
        }
        $("#screen").html("<center><div id=\"myUp2\" class=\"circle\">" + ponerLetra + "</div></center>");
        $("#myUp2").css("border-color", "transparent transparent " + this.alfabeto[seleccion][1] + " transparent");
        $("#myUp2").css("background", "" + this.alfabeto[seleccion][1]);
        $(".img-sin").css("margin-top", "90");
        if (tieneVerdadero) {
          $("#screen").html("<center><div id=\"myUp2\" class=\"circle\">" + ponerLetra + "</div></center>");
          $("#myUp2").css("border-color", "transparent transparent " + this.alfabeto[seleccion][1] + " transparent");
          $("#myUp2").css("background", "" + this.alfabeto[seleccion][1]);
          $(".img-sin").css("margin-top", "90");
          this.resultado = true;
        } else {
          $("#screen").html("<center><div id=\"myUp\" class=\"up\">" + ponerLetra + "</div></center>");
          $("#myUp").css("border-color", "transparent transparent " + this.alfabeto[seleccion][1] + " transparent");
          this.resultado = false;
        }
      } else {
        colorLetra = "white";
        seleccion = _.random(0, 25);
        while (true) {
          seleccion2 = _.random(0, 25);
          if (seleccion2 !== seleccion) {
            break;
          }
        }
        ponerLetra = " <p style=\"color:" + colorLetra + ";\">" + this.alfabeto[seleccion][0] + "<p>";
        if (sinestesiaOpcion1 === 0 || sinestesiaOpcion1 === 2) {
          ponerCara = "<p style=\"color:" + colorLetra + ";\"><img src=\"/emo/" + (this.alfabeto[seleccion][0].toLowerCase()) + modif[seleccion][1] + "." + modif[seleccion][0] + "\" width=\"64px\" height=\"64px\" style=\"z-index: 9999;\" class=\"img-sin\"><p>";
          if (sinestesiaOpcion1 === 2) {
            ponerLetra = ponerCara;
          }
          if (sinestesiaOpcion1 === 0 && _.random(0, 1)) {
            ponerLetra = ponerCara;
          }
        }
        if (seleccion2 === 8 || seleccion2 === 9 || seleccion === 16 || seleccion === 21 || seleccion === 6) {
          colorLetra = "black";
        }
        if (tieneVerdadero) {
          this.resultado = false;
          $("#screen").html("<center><div id=\"myUp2\" class=\"circle\">" + ponerLetra + "</div></center>");
          $("#myUp2").css("border-color", "transparent transparent " + this.alfabeto[seleccion][1] + " transparent");
          $("#myUp2").css("background", "" + this.alfabeto[seleccion2][1]);
          $(".img-sin").css("margin-top", "90");
        } else {
          this.resultado = true;
          $("#screen").html("<center><div id=\"myUp\" class=\"up\">" + ponerLetra + "</div></center>");
          $("#myUp").css("border-color", "transparent transparent " + this.alfabeto[seleccion2][1] + " transparent");
        }
      }
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[4][1]);
        };
      })(this)), this.tiempoEjercicios[4][0]);
    };

    motorReaction.prototype.binarios = function() {
      var m, mBinarios, o, ref, ref1, tam_x, tam_y, xx, yy;
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      this.tipo = 2;
      this.pausa = 0;
      tam_x = $("#binX").val();
      tam_y = $("#binY").val();
      mBinarios = [];
      this.salida = "";
      for (xx = m = 0, ref = tam_x - 1; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
        mBinarios[xx] = [];
        for (yy = o = 0, ref1 = tam_y - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; yy = 0 <= ref1 ? ++o : --o) {
          mBinarios[xx][yy] = _.random(0, 1);
          this.salida += mBinarios[xx][yy];
        }
        this.salida += "<br>";
      }
      $("#screen").html("<h1>" + this.salida + "</h1>");
      this.resultado = true;
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(_this.resultado);
          }), _this.tiempoEjercicios[3][1]);
        };
      })(this)), this.tiempoEjercicios[3][0]);
    };

    motorReaction.prototype.periferica = function() {
      var espacios2, m, mostrarPeriY, n1, n2, n3, n4, periX, periY, ref, yy;
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      this.pausa = 0;
      while (true) {
        n1 = _.random(0, 9);
        n2 = _.random(0, 9);
        n3 = _.random(0, 9);
        n4 = _.random(0, 9);
        if (n1 + n2 !== n3 + n4) {
          break;
        }
      }
      if (n1 + n2 > n3 + n4) {
        this.resultado = true;
      } else {
        this.resultado = false;
      }
      periX = $("#periX").val();
      periY = $("#periY").val();
      mostrarPeriY = "";
      for (yy = m = 0, ref = periY - 1; 0 <= ref ? m <= ref : m >= ref; yy = 0 <= ref ? ++m : --m) {
        mostrarPeriY += "<br>";
      }
      espacios2 = "<span style=\"display: inline-block; width: " + periX + "px;\">&nbsp;</span>";
      this.salida = n1 + espacios2 + n2 + mostrarPeriY + n3 + espacios2 + n4;
      $("#screen").html("<h1>" + this.salida + "</h1>");
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[2][1]);
        };
      })(this)), this.tiempoEjercicios[2][0]);
    };

    motorReaction.prototype.randomDate = function(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    motorReaction.prototype.leapYear = function(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    };

    motorReaction.prototype.calendario = function() {
      var bis, control, date, day, fullYear, m, month, myDate, queDia, xx, year;
      myDate = this.randomDate(new Date(1900, 0, 1), new Date(2099, 0, 1));
      month = myDate.getMonth();
      fullYear = myDate.getFullYear();
      day = myDate.getDay();
      date = myDate.getDate();
      year = myDate.getYear();
      this.resultado = true;
      this.pausa = 0;
      bis = "no";
      if (this.leapYear(fullYear)) {
        bis = "si";
      }
      for (xx = m = 0; m <= 6; xx = ++m) {
        this.teclaCalendario[xx] = false;
      }
      this.teclaCalendario[day] = true;
      queDia = "";
      switch (parseInt(day)) {
        case 0:
          queDia = "domingo";
          break;
        case 1:
          queDia = "lunes";
          break;
        case 2:
          queDia = "martes";
          break;
        case 3:
          queDia = "miércoles";
          break;
        case 4:
          queDia = "jueves";
          break;
        case 5:
          queDia = "viernes";
          break;
        case 6:
          queDia = "sabado";
      }
      this._tR2 = parseInt(day);
      this._tR = date + " - " + window.MONTH[month][1] + " - " + fullYear;
      this._tR1 = queDia;
      $("#screen").html("<h3>" + date + " - " + window.MONTH[month][1] + " - " + fullYear + "</h3>");
      control = "";
      if (this.esMovil) {
        control = "<input type=\"button\" name=\"bb1\" value=\"Domingo\" id=\"btn-dom\">\n<input type=\"button\" name=\"bb2\" value=\"Lunes\" id=\"btn-lun\">\n<input type=\"button\" name=\"bb3\" value=\"Martes\" id=\"btn-mar\">\n<input type=\"button\" name=\"bb4\" value=\"Miercoles\" id=\"btn-mie\">\n<input type=\"button\" name=\"bb5\" value=\"Jueves\" id=\"btn-jue\">\n<input type=\"button\" name=\"bb6\" value=\"Viernes\" id=\"btn-vie\">\n<input type=\"button\" name=\"bb7\" value=\"Sabado\" id=\"btn-sab\">\n";
      }
      if ($("#helpMode").is(':checked') && $("#calendarHelp").is(':checked')) {
        $("#liveHelp1").html("<br>\nCodigo a&ntilde;o : " + window.YEAR[year][1] + "  <br>\nBisiesto : " + bis + " <br>\nCodigo mes : " + window.MONTH[month][0] + " <br>\n" + control + "\n");
      }
      if (this.esMovil) {
        $("#btn-dom").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 0 ? "correcta" : "domingo") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[0]);
          };
        })(this));
        $("#btn-lun").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 1 ? "correcta" : "lunes") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[1]);
          };
        })(this));
        $("#btn-mar").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 2 ? "correcta" : "martes") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[2]);
          };
        })(this));
        $("#btn-mie").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 3 ? "correcta" : "miércoles") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[3]);
          };
        })(this));
        $("#btn-jue").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 4 ? "correcta" : "jueves") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[4]);
          };
        })(this));
        $("#btn-vie").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 5 ? "correcta" : "viernes") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[5]);
          };
        })(this));
        $("#btn-sab").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " su respuesta es " + (_this._tR2 === 6 ? "correcta" : "sábado") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[6]);
          };
        })(this));
      }
      this.t_ini = Date.now();
      this.tiempo();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[10][1]);
        };
      })(this)), this.tiempoEjercicios[10][0]);
    };

    motorReaction.prototype.aritmetica = function() {
      var ejercicio, maxA, maxB, minA, minB, oA, operadorAritmetico, respuesta, respuestaMostrar, respuestaValor, vA, vB;
      vA = "";
      vB = "";
      oA = "";
      maxA = 0;
      maxB = 0;
      respuesta = 0;
      respuestaValor = "";
      respuestaMostrar = "";
      ejercicio = _.random(0, 2);
      respuesta = _.random(0, 1);
      this.resultado = respuesta;
      switch (ejercicio) {
        case 0:
          operadorAritmetico = "+";
          maxA = $("#sumaMax").val();
          maxB = $("#sumaMax").val();
          minA = $("#sumaMin").val();
          minB = $("#sumaMin").val();
          break;
        case 1:
          operadorAritmetico = "-";
          maxA = $("#restaMax").val();
          maxB = $("#restaMax").val();
          minA = $("#restaMin").val();
          minB = $("#restaMin").val();
          break;
        default:
          operadorAritmetico = "*";
          maxA = $("#multiMax").val();
          maxB = $("#multiMax").val();
          minA = $("#multiMin").val();
          minB = $("#multiMin").val();
      }
      this.pausa = 0;
      this.salida = "";
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      this.variables[0] = _.random(parseInt(minA), parseInt(maxA));
      this.variables[1] = _.random(parseInt(minB), parseInt(maxB));
      if (respuesta) {
        respuestaValor = eval(this.variables[0] + operadorAritmetico + this.variables[1]);
      } else {
        respuestaValor = eval(this.variables[0] + operadorAritmetico + this.variables[1]) + _.random(-5, 5);
      }
      this.salida = this.variables[0] + this.espacios5 + operadorAritmetico + this.espacios5 + this.variables[1] + this.espacios5 + "=" + this.espacios5 + respuestaValor;
      $("#screen").html("<h4>" + this.salida + "</h4>");
      this.t_ini = Date.now();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[1][1]);
        };
      })(this)), this.tiempoEjercicios[1][0]);
    };

    motorReaction.prototype.logica = function(programa) {
      var auxA, auxB, auxC, colores, conjA, conjB, contador1, elegida, elegida2, emocionSeleccionada, escondertm, estilo, experiment, grupo, incluido, incluidoImagen, m, mEmocion, mLog, mOp, mSalida, mSeleccionados, mValor, maxMath, minMath, misPalabras, myClass, myGrupo, myLevelLogic, num, o, oA, opArray, opLog, opMath, opRand, operador1, p, parentesis, q, ref, repetir, resultadoA, resultadoB, rnd_11, salidaA, salidaB, salidaTestMemory, salidaTestMemoryFalse, salidaTestMemoryMostrarTxt, salidaTestMemoryTotal, salidasTestMemoryArray, salidasTestMemoryArrayFalse, select1, select2, t, testMemory, textLogic, todos1, vA, vB, valueLogic, xx, yy, z, zz;
      myLevelLogic = parseInt($("#myLevelLogic").val());
      mValor = [];
      mSalida = [];
      testMemory = 1;
      escondertm = 0;
      if (myLevelLogic === 3 || myLevelLogic === 4 || myLevelLogic === 5) {
        testMemory = 0;
        myLevelLogic -= 3;
      }
      if (programa === 0) {
        this.espacios = '<span style="display: inline-block; width: 280px;">&nbsp;</span>';
        mValor[0] = _.random(0, 1);
        mValor[1] = _.random(0, 1);
        mValor[2] = _.random(0, 1);
        mValor[3] = _.random(0, 1);
        mValor[4] = _.random(0, 1);
        mValor[5] = _.random(0, 1);
        salidaTestMemory = [];
        salidaTestMemoryFalse = [];
        salidasTestMemoryArray = [];
        salidasTestMemoryArrayFalse = [];
        salidaTestMemoryTotal = "";
        colores = ["red", "green", "blue", "gray", "orange", "black"];
        if (testMemory) {
          misPalabras = _.shuffle(window.palabras);
          z = 0;
          while (true) {
            salidasTestMemoryArray[z] = [];
            salidasTestMemoryArrayFalse[z] = [];
            salidasTestMemoryArray[z][0] = misPalabras[_.random(0, misPalabras.length - 1)];
            salidasTestMemoryArray[z][1] = misPalabras[_.random(0, misPalabras.length - 1)];
            if (salidasTestMemoryArray[z][0] === salidasTestMemoryArray[z][1]) {
              continue;
            }
            zz = 0;
            repetir = 0;
            while (true) {
              if (z === 0) {
                break;
              }
              if (zz === 10) {
                break;
              }
              if (zz === z - 1) {
                break;
              }
              if (salidasTestMemoryArray[z][0] === salidasTestMemoryArray[zz][0]) {
                repetir = 1;
                break;
              }
              zz += 1;
            }
            if (repetir) {
              continue;
            }
            while (true) {
              salidasTestMemoryArrayFalse[z][0] = salidasTestMemoryArray[z][0];
              salidasTestMemoryArrayFalse[z][1] = misPalabras[_.random(0, misPalabras.length - 1)];
              if (salidasTestMemoryArrayFalse[z][1] !== salidasTestMemoryArray[z][1] && salidasTestMemoryArrayFalse[z][0] !== salidasTestMemoryArrayFalse[z][1]) {
                break;
              }
            }
            salidaTestMemory[z] = ("<span style=\"color: " + colores[z] + "\" class=\"-tm-" + z + "\"> ") + salidasTestMemoryArray[z][0] + " es " + salidasTestMemoryArray[z][1] + "</span>";
            salidaTestMemoryFalse[z] = ("<span style=\"color: " + colores[z] + "\" class=\"-tm-" + z + "\"> ") + salidasTestMemoryArrayFalse[z][0] + " es " + salidasTestMemoryArrayFalse[z][1] + "</span>";
            z += 1;
            if (myLevelLogic === 0 && z === 2) {
              break;
            }
            if (myLevelLogic === 1 && z === 3) {
              break;
            }
            if (z === 6) {
              break;
            }
          }
          salidaTestMemoryMostrarTxt = _.shuffle(salidaTestMemory);
          z = 0;
          salidaTestMemoryTotal += "<br>";
          while (true) {
            salidaTestMemoryTotal += salidaTestMemoryMostrarTxt[z] + "<br>";
            z++;
            if (myLevelLogic === 0 && z === 2) {
              break;
            }
            if (myLevelLogic === 1 && z === 3) {
              break;
            }
            if (z === 6) {
              break;
            }
          }
          salidaTestMemoryTotal += "<br><br><br><br><br><br><br><br><br><br><br><br><br>";
          if (mValor[0]) {
            mSalida[0] = salidaTestMemory[0];
          } else {
            mSalida[0] = salidaTestMemoryFalse[0];
          }
          if (mValor[1]) {
            mSalida[1] = salidaTestMemory[1];
          } else {
            mSalida[1] = salidaTestMemoryFalse[1];
          }
          if (mValor[2]) {
            mSalida[2] = salidaTestMemory[2];
          } else {
            mSalida[2] = salidaTestMemoryFalse[2];
          }
          if (mValor[3]) {
            mSalida[3] = salidaTestMemory[3];
          } else {
            mSalida[3] = salidaTestMemoryFalse[3];
          }
          if (mValor[4]) {
            mSalida[4] = salidaTestMemory[4];
          } else {
            mSalida[4] = salidaTestMemoryFalse[4];
          }
          if (mValor[5]) {
            mSalida[5] = salidaTestMemory[5];
          } else {
            mSalida[5] = salidaTestMemoryFalse[5];
          }
        } else {
          if (mValor[0]) {
            mSalida[0] = "V";
          } else {
            mSalida[0] = "F";
          }
          if (mValor[1]) {
            mSalida[1] = "V";
          } else {
            mSalida[1] = "F";
          }
          if (mValor[2]) {
            mSalida[2] = "V";
          } else {
            mSalida[2] = "F";
          }
          if (mValor[3]) {
            mSalida[3] = "V";
          } else {
            mSalida[3] = "F";
          }
          if (mValor[4]) {
            mSalida[4] = "V";
          } else {
            mSalida[4] = "F";
          }
          if (mValor[5]) {
            mSalida[5] = "V";
          } else {
            mSalida[5] = "F";
          }
        }
      }
      if (programa === 1) {
        this.espacios = '';
        opMath = ["+", "-", "*"];
        opLog = [">", ">=", "<", "<=", "==", "!="];
        minMath = [];
        maxMath = [];
        opRand = 0;
        mOp = [];
        mLog = [];
        for (xx = m = 0; m <= 5; xx = ++m) {
          opRand = _.random(0, 2);
          mOp[xx] = opMath[opRand];
          if (opRand === 0) {
            minMath[xx] = parseInt($("#sumaMinL").val());
            maxMath[xx] = parseInt($("#sumaMaxL").val());
          }
          if (opRand === 1) {
            minMath[xx] = parseInt($("#restaMinL").val());
            maxMath[xx] = parseInt($("#restaMaxL").val());
          }
          if (opRand === 2) {
            minMath[xx] = parseInt($("#multiMinL").val());
            maxMath[xx] = parseInt($("#multiMaxL").val());
          }
        }
        for (xx = o = 0; o <= 2; xx = ++o) {
          mLog[xx] = opLog[_.random(0, 5)];
        }
        mSalida[0] = (_.random(minMath[0], maxMath[0])) + " " + mOp[0] + " " + (_.random(minMath[0], maxMath[0])) + " " + mLog[0] + " " + (_.random(minMath[1], maxMath[1])) + " " + mOp[1] + " " + (_.random(minMath[1], maxMath[1]));
        mSalida[1] = (_.random(minMath[2], maxMath[2])) + " " + mOp[2] + " " + (_.random(minMath[2], maxMath[2])) + " " + mLog[1] + " " + (_.random(minMath[3], maxMath[3])) + " " + mOp[3] + " " + (_.random(minMath[3], maxMath[3]));
        mSalida[2] = (_.random(minMath[4], maxMath[4])) + " " + mOp[4] + " " + (_.random(minMath[4], maxMath[4])) + " " + mLog[2] + " " + (_.random(minMath[5], maxMath[5])) + " " + mOp[5] + " " + (_.random(minMath[5], maxMath[5]));
        mValor[0] = eval(mSalida[0]);
        mValor[1] = eval(mSalida[1]);
        mValor[2] = eval(mSalida[2]);
      }
      if (programa === 2) {
        console.clear();
        this.cantidadIncluido = 0;
        this.espacios = '';
        this.contadorIncluido = 0;
        for (xx = p = 0; p <= 2; xx = ++p) {
          switch (_.random(0, 3)) {
            case 0:
              estilo = _.random(0, 2);
              if (estilo === 1) {
                myClass = " class=\"emo-img\" ";
                this.emocionesIncluidas[this.cantidadIncluido] = [];
                emocionSeleccionada = _.random(0, 38);
                mEmocion = [];
                mEmocion = (function() {
                  var q, results;
                  results = [];
                  for (num = q = 0; q <= 38; num = ++q) {
                    results.push(num);
                  }
                  return results;
                })();
                mEmocion = _.without(mEmocion, emocionSeleccionada);
                mEmocion = _.shuffle(mEmocion);
                if (_.random(0, 1)) {
                  mEmocion = _.first(mEmocion, 10);
                  mEmocion[mEmocion.length] = emocionSeleccionada;
                  mEmocion = _.shuffle(mEmocion);
                  this.emocionesIncluidas[this.cantidadIncluido] = _.map(mEmocion, (function(_this) {
                    return function(num) {
                      return window.emociones[num][0];
                    };
                  })(this));
                  incluido = _.random(0, 1);
                  incluidoImagen = "/em/img/noIncluido.png";
                  if (incluido) {
                    incluidoImagen = "/em/img/incluido.gif";
                  }
                  mSalida[xx] = "<img src=\"" + window.emociones[emocionSeleccionada][0] + "\" title=\"" + window.emociones[emocionSeleccionada][0] + "\" onclick=\"$('#textoAyudaEmocion').html('" + window.emociones[emocionSeleccionada][0] + "');\" " + myClass + "> <img src=\"" + incluidoImagen + "\"> <span id=\"incluido" + this.cantidadIncluido + "\"></span>";
                  if (incluido) {
                    mValor[xx] = 1;
                  } else {
                    mValor[xx] = 0;
                  }
                } else {
                  mEmocion = _.first(mEmocion, 10);
                  this.emocionesIncluidas[this.cantidadIncluido] = _.map(mEmocion, (function(_this) {
                    return function(num) {
                      return window.emociones[num][0];
                    };
                  })(this));
                  incluido = _.random(0, 1);
                  incluidoImagen = "/em/img/noIncluido.png";
                  if (incluido) {
                    incluidoImagen = "/em/img/incluido.gif";
                  }
                  mSalida[xx] = "<img src=\"" + window.emociones[emocionSeleccionada][0] + "\"  title=\"" + window.emociones[emocionSeleccionada][0] + "\" onclick=\"$('#textoAyudaEmocion').html('" + window.emociones[emocionSeleccionada][0] + "');\" " + myClass + "> <img src=\"" + incluidoImagen + "\"> <span id=\"incluido" + this.cantidadIncluido + "\"></span>";
                  if (incluido) {
                    mValor[xx] = 0;
                  } else {
                    mValor[xx] = 1;
                  }
                }
                this.cantidadIncluido += 1;
              }
              if (estilo === 0) {
                myClass = " class=\"emoji-img\" ";
                this.emocionesIncluidas[this.cantidadIncluido] = [];
                emocionSeleccionada = _.random(0, 50);
                mEmocion = [];
                mEmocion = (function() {
                  var q, results;
                  results = [];
                  for (num = q = 0; q <= 50; num = ++q) {
                    results.push(num);
                  }
                  return results;
                })();
                mEmocion = _.without(mEmocion, emocionSeleccionada);
                mEmocion = _.shuffle(mEmocion);
                if (_.random(0, 1)) {
                  mEmocion = _.first(mEmocion, 10);
                  mEmocion[mEmocion.length] = emocionSeleccionada;
                  mEmocion = _.shuffle(mEmocion);
                  this.emocionesIncluidas[this.cantidadIncluido] = _.map(mEmocion, (function(_this) {
                    return function(num) {
                      return window.memoriaM1[num];
                    };
                  })(this));
                  incluido = _.random(0, 1);
                  incluidoImagen = "/em/img/noIncluido.png";
                  if (incluido) {
                    incluidoImagen = "/em/img/incluido.gif";
                  }
                  mSalida[xx] = "<img src=\"" + window.memoriaM1[emocionSeleccionada] + "\" title=\"" + window.memoriaM1[emocionSeleccionada] + "\"  onclick=\"$('#textoAyudaEmocion').html('" + window.memoriaM1[emocionSeleccionada] + "');\"  " + myClass + "> <img src=\"" + incluidoImagen + "\"> <span id=\"incluido" + this.cantidadIncluido + "\"></span>";
                  if (incluido) {
                    mValor[xx] = 1;
                  } else {
                    mValor[xx] = 0;
                  }
                } else {
                  mEmocion = _.first(mEmocion, 10);
                  this.emocionesIncluidas[this.cantidadIncluido] = _.map(mEmocion, (function(_this) {
                    return function(num) {
                      return window.memoriaM1[num];
                    };
                  })(this));
                  incluido = _.random(0, 1);
                  incluidoImagen = "/em/img/noIncluido.png";
                  if (incluido) {
                    incluidoImagen = "/em/img/incluido.gif";
                  }
                  mSalida[xx] = "<img src=\"" + window.memoriaM1[emocionSeleccionada] + "\" title=\"" + window.memoriaM1[emocionSeleccionada] + "\"  onclick=\"$('#textoAyudaEmocion').html('" + window.memoriaM1[emocionSeleccionada] + "');\"  " + myClass + "> <img src=\"" + incluidoImagen + "\"> <span id=\"incluido" + this.cantidadIncluido + "\"></span>";
                  if (incluido) {
                    mValor[xx] = 0;
                  } else {
                    mValor[xx] = 1;
                  }
                }
                this.cantidadIncluido += 1;
              }
              if (estilo === 2) {
                myClass = " class=\"meme-img\" ";
                this.emocionesIncluidas[this.cantidadIncluido] = [];
                emocionSeleccionada = _.random(0, 56);
                mEmocion = [];
                mEmocion = (function() {
                  var q, results;
                  results = [];
                  for (num = q = 0; q <= 56; num = ++q) {
                    results.push(num);
                  }
                  return results;
                })();
                mEmocion = _.without(mEmocion, emocionSeleccionada);
                mEmocion = _.shuffle(mEmocion);
                if (_.random(0, 1)) {
                  mEmocion = _.first(mEmocion, 10);
                  mEmocion[mEmocion.length] = emocionSeleccionada;
                  mEmocion = _.shuffle(mEmocion);
                  this.emocionesIncluidas[this.cantidadIncluido] = _.map(mEmocion, (function(_this) {
                    return function(num) {
                      return window.memoriaM2[num];
                    };
                  })(this));
                  incluido = _.random(0, 1);
                  incluidoImagen = "/em/img/noIncluido.png";
                  if (incluido) {
                    incluidoImagen = "/em/img/incluido.gif";
                  }
                  mSalida[xx] = "<img src=\"" + window.memoriaM2[emocionSeleccionada] + "\" title=\"" + window.memoriaM2[emocionSeleccionada] + "\"  onclick=\"$('#textoAyudaEmocion').html('" + window.memoriaM2[emocionSeleccionada] + "');\"  " + myClass + "> <img src=\"" + incluidoImagen + "\"> <span id=\"incluido" + this.cantidadIncluido + "\"></span>";
                  if (incluido) {
                    mValor[xx] = 1;
                  } else {
                    mValor[xx] = 0;
                  }
                } else {
                  mEmocion = _.first(mEmocion, 10);
                  this.emocionesIncluidas[this.cantidadIncluido] = _.map(mEmocion, (function(_this) {
                    return function(num) {
                      return window.memoriaM2[num];
                    };
                  })(this));
                  incluido = _.random(0, 1);
                  incluidoImagen = "/em/img/noIncluido.png";
                  if (incluido) {
                    incluidoImagen = "/em/img/incluido.gif";
                  }
                  mSalida[xx] = "<img src=\"" + window.memoriaM2[emocionSeleccionada] + "\" title=\"" + window.memoriaM2[emocionSeleccionada] + "\"  onclick=\"$('#textoAyudaEmocion').html('" + window.memoriaM2[emocionSeleccionada] + "');\"  " + myClass + "> <img src=\"" + incluidoImagen + "\"> <span id=\"incluido" + this.cantidadIncluido + "\"></span>";
                  if (incluido) {
                    mValor[xx] = 0;
                  } else {
                    mValor[xx] = 1;
                  }
                }
                this.cantidadIncluido += 1;
              }
              break;
            case 1:
              myClass = " class=\"emo-img\" ";
              grupo = [];
              myGrupo = _.random(0, 5);
              yy = 0;
              for (zz = q = 0, ref = window.emociones.length - 1; 0 <= ref ? q <= ref : q >= ref; zz = 0 <= ref ? ++q : --q) {
                if (window.emociones[zz][2] === myGrupo) {
                  grupo[yy] = [];
                  grupo[yy] = window.emociones[zz];
                  yy += 1;
                }
              }
              select1 = 0;
              select2 = 0;
              while (true) {
                select1 = _.random(0, grupo.length - 1);
                select2 = _.random(0, grupo.length - 1);
                if (select1 !== select2) {
                  break;
                }
              }
              operador1 = "<";
              if (_.random(0, 1)) {
                operador1 = ">";
              }
              mSalida[xx] = "<img src=\"" + grupo[select1][0] + "\" onclick=\"$('#textoAyudaEmocion').html('" + grupo[select1][0] + "');\"  " + myClass + "> " + operador1 + " <img src=\"" + grupo[select2][0] + "\" onclick=\"$('#textoAyudaEmocion').html('" + grupo[select2][0] + "');\"  " + myClass + ">";
              mValor[xx] = eval(grupo[select1][3] + " " + operador1 + " " + grupo[select2][3]);
              console.log((grupo[select1][3] + " " + operador1 + " " + grupo[select2][3] + "|") + mValor[xx]);
              break;
            case 2:
              myClass = " class=\"emo-img\" ";
              elegida = _.random(0, window.emociones.length - 1);
              if (_.random(0, 1)) {
                mSalida[xx] = "<img src=\"" + window.emociones[elegida][0] + "\"  onclick=\"$('#textoAyudaEmocion').html('" + window.emociones[elegida][0] + "');\"  " + myClass + "> = " + window.emociones[elegida][1];
                mValor[xx] = 1;
              } else {
                while (true) {
                  elegida2 = _.random(0, window.emociones.length - 1);
                  if (elegida !== elegida2) {
                    break;
                  }
                }
                mSalida[xx] = "<img src=\"" + window.emociones[elegida][0] + "\"  onclick=\"$('#textoAyudaEmocion').html('" + window.emociones[elegida][0] + "');\"  " + myClass + "> = " + window.emociones[elegida2][1];
                mValor[xx] = 0;
              }
              break;
            case 3:
              myClass = " class=\"emo-img\" ";
              todos1 = [];
              todos1 = (function() {
                var results, t;
                results = [];
                for (num = t = 0; t <= 38; num = ++t) {
                  results.push(num);
                }
                return results;
              })();
              todos1 = _.shuffle(todos1);
              mSeleccionados = [];
              contador1 = 0;
              for (zz = t = 0; t <= 38; zz = ++t) {
                if (window.emociones[todos1[zz]][2] === 6) {
                  mSeleccionados[contador1] = [];
                  mSeleccionados[contador1] = window.emociones[todos1[zz]];
                  contador1 += 1;
                }
                if (contador1 === 2) {
                  break;
                }
                if (zz === 38 && contador1 === 1) {
                  zz = 0;
                  todos1 = _.shuffle(todos1);
                }
              }
              console.log(mSeleccionados);
              if (_.random(0, 1)) {
                mSalida[xx] = "<img src=\"" + window.emociones[mSeleccionados[0][4]][0] + "\" " + myClass + "> + <img src=\"" + window.emociones[mSeleccionados[0][5]][0] + "\" " + myClass + "> = <img src=\"" + mSeleccionados[0][0] + "\" onclick=\"$('#textoAyudaEmocion').html('" + mSeleccionados[0][0] + "');\"  " + myClass + ">";
                mValor[xx] = 1;
              } else {
                while (true) {
                  elegida2 = _.random(0, window.emociones.length - 1);
                  if (elegida !== elegida2) {
                    break;
                  }
                }
                mSalida[xx] = "<img src=\"" + window.emociones[mSeleccionados[1][4]][0] + "\" " + myClass + "> + <img src=\"" + window.emociones[mSeleccionados[1][5]][0] + "\" " + myClass + "> = <img src=\"" + mSeleccionados[0][0] + "\" onclick=\"$('#textoAyudaEmocion').html('" + mSeleccionados[0][0] + "');\"  " + myClass + ">";
                mValor[xx] = 0;
              }
              console.log(mValor[xx]);
          }
        }
      }
      vA = "";
      vB = "";
      oA = "";
      this.pausa = 0;
      this.salida = "";
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      rnd_11 = _.random(0, 1);
      if (myLevelLogic === 0) {
        rnd_11 = 1;
      }
      if (rnd_11) {
        this.cantidadProposiciones = 2;
        escondertm = 1;
        this.variables[0] = mValor[0];
        this.variables[1] = mValor[1];
        this.operadores[0] = _.random(0, 1);
        this.operadores[2] = _.random(0, 1);
        this.operadores[1] = _.random(0, 6);
        if (this.operadores[0]) {
          this.salida += "~";
          vA = "!" + "this.variables[0]";
        } else {
          vA = "this.variables[0]";
        }
        if (this.operadores[2]) {
          vB = "!" + "this.variables[1]";
        } else {
          vB = "this.variables[1]";
        }

        /*
        			if @variables[0]
        				@salida += "V"
        			else
        				@salida += "F"
         */
        this.salida += mSalida[0];
        auxA = eval(vA);
        auxB = eval(vB);
        if (auxA === true) {
          auxA = 1;
        }
        if (auxA === false) {
          auxA = 0;
        }
        if (auxB === true) {
          auxB = 1;
        }
        if (auxB === false) {
          auxB = 0;
        }
        this.espacios = "&nbsp;";
        if (this.operadores[1] === 0) {
          this.salida += this.espacios + " <img src='/em/img/smash.gif'> " + this.espacios;
          oA += " && ";
          this.chequear = vA + oA + vB;
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 1) {
          this.salida += this.espacios + " <img src='/em/img/wedge.gif'> " + this.espacios;
          oA += " || ";
          this.chequear = vA + oA + vB;
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 2) {
          this.salida += this.espacios + " -&#62; " + this.espacios;
          if (auxA && auxB) {
            this.resultado = 1;
          }
          if (auxA === 1 && auxB === 0) {
            this.resultado = 0;
          }
          if (auxA === 0 && auxB === 1) {
            this.resultado = 1;
          }
          if (auxA === 0 && auxB === 0) {
            this.resultado = 1;
          }
        }
        if (this.operadores[1] === 3) {
          this.salida += this.espacios + " &#60-&#62; " + this.espacios;
          if (auxA && auxB) {
            this.resultado = 1;
          }
          if (auxA === 1 && auxB === 0) {
            this.resultado = 0;
          }
          if (auxA === 0 && auxB === 1) {
            this.resultado = 0;
          }
          if (auxA === 0 && auxB === 0) {
            this.resultado = 1;
          }
        }
        if (this.operadores[1] === 4) {
          this.salida += this.espacios + " <img src='/em/img/xor.png'> " + this.espacios;
          this.chequear = "( auxA && !auxB ) || ( !auxA && auxB )";
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 5) {
          this.salida += this.espacios + " <img src='/em/img/nand.png'> " + this.espacios;
          oA = " && ";
          this.chequear = "!(" + vA + oA + vB + ")";
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 6) {
          this.salida += this.espacios + " <img src='/em/img/nor.png'> " + this.espacios;
          oA = " || ";
          this.chequear = "!(" + vA + oA + vB + ")";
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[2]) {
          this.salida += "~";
        }

        /*
        			if @variables[1]
        				@salida += "V"
        			else
        				@salida += "F"
         */
        this.salida += mSalida[1];
        salidaA = " ( " + this.salida + " ) ";
        resultadoA = this.resultado;
      } else {
        this.cantidadProposiciones = 3;
        if ($("#facilLogica").is(':checked')) {
          this.logica();
          return;
        }
        opArray = ["<img src='/em/img/smash.gif'>", "<img src='/em/img/wedge.gif'>", " -&#62; ", " &#60-&#62; ", "<img src='/em/img/xor.png'>", "<img src='/em/img/nand.png'>", "<img src='/em/img/nor.png'>"];
        auxA = "";
        auxB = "";
        auxC = "";
        conjA = "";
        conjB = "";
        parentesis = 0;
        parentesis = _.random(0, 1);
        this.variables[0] = mValor[0];
        this.variables[1] = mValor[1];
        this.variables[2] = mValor[2];
        this.operadores[0] = _.random(0, 6);
        this.operadores[1] = _.random(0, 6);
        this.operadores[2] = -1;
        auxA = this.variables[0];
        auxB = this.variables[1];
        auxC = this.variables[2];
        if (this.variables[0]) {
          if (parentesis === 0) {
            this.salida += "(" + mSalida[0];
          } else {
            this.salida += "" + mSalida[0];
          }
        } else {
          if (parentesis === 0) {
            this.salida += "(" + mSalida[0];
          } else {
            this.salida += "" + mSalida[0];
          }
        }
        this.salida += " " + opArray[this.operadores[0]] + " ";
        if (this.variables[1]) {
          if (parentesis === 0) {
            this.salida += mSalida[1] + ")";
          } else {
            this.salida += "(" + mSalida[1];
          }
        } else {
          if (parentesis === 0) {
            this.salida += mSalida[1] + ")";
          } else {
            this.salida += "(" + mSalida[1];
          }
        }
        this.salida += " " + opArray[this.operadores[1]] + " ";
        if (this.variables[2]) {
          if (parentesis === 0) {
            this.salida += "" + mSalida[2];
          } else {
            this.salida += mSalida[2] + ")";
          }
        } else {
          if (parentesis === 0) {
            this.salida += "" + mSalida[2];
          } else {
            this.salida += mSalida[2] + ")";
          }
        }
        if (parentesis === 0) {
          if (this.operadores[0] === 0) {
            this.chequear = "auxA  && auxB";
            conjA = eval(this.chequear);
          }
          if (this.operadores[0] === 1) {
            this.chequear = "auxA || auxB";
            conjA = eval(this.chequear);
          }
          if (this.operadores[0] === 2) {
            if (auxA && auxB) {
              conjA = 1;
            }
            if (auxA === 1 && auxB === 0) {
              conjA = 0;
            }
            if (auxA === 0 && auxB === 1) {
              conjA = 1;
            }
            if (auxA === 0 && auxB === 0) {
              conjA = 1;
            }
          }
          if (this.operadores[0] === 3) {
            if (auxA && auxB) {
              conjA = 1;
            }
            if (auxA === 1 && auxB === 0) {
              conjA = 0;
            }
            if (auxA === 0 && auxB === 1) {
              conjA = 0;
            }
            if (auxA === 0 && auxB === 0) {
              conjA = 1;
            }
          }
          if (this.operadores[0] === 4) {
            this.chequear = "( auxA && !auxB ) || ( !auxA && auxB )";
            conjA = eval(this.chequear);
          }
          if (this.operadores[0] === 5) {
            this.chequear = "!( auxA  &&  auxB )";
            conjA = eval(this.chequear);
          }
          if (this.operadores[0] === 6) {
            this.chequear = "!( auxA  ||  auxB )";
            conjA = eval(this.chequear);
          }
          if (this.operadores[1] === 0) {
            this.chequear = "conjA && auxC";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 1) {
            this.chequear = "conjA || auxC";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 2) {
            if (conjA === true) {
              conjA = 1;
            }
            if (conjA === false) {
              conjA = 0;
            }
            if (conjA === 1 && auxC === 1) {
              this.resultado = 1;
            }
            if (conjA === 1 && auxC === 0) {
              this.resultado = 0;
            }
            if (conjA === 0 && auxC === 1) {
              this.resultado = 1;
            }
            if (conjA === 0 && auxC === 0) {
              this.resultado = 1;
            }
          }
          if (this.operadores[1] === 3) {
            if (conjA === true) {
              conjA = 1;
            }
            if (conjA === false) {
              conjA = 0;
            }
            if (conjA === 1 && auxC === 1) {
              this.resultado = 1;
            }
            if (conjA === 1 && auxC === 0) {
              this.resultado = 0;
            }
            if (conjA === 0 && auxC === 1) {
              this.resultado = 0;
            }
            if (conjA === 0 && auxC === 0) {
              this.resultado = 1;
            }
          }
          if (this.operadores[1] === 4) {
            this.chequear = "( conjA && !auxC ) || ( !conjA && auxC )";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 5) {
            this.chequear = "!( conjA && auxC )";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 6) {
            this.chequear = "!( conjA || auxC )";
            this.resultado = eval(this.chequear);
          }
        } else {
          if (this.operadores[1] === 0) {
            this.chequear = "auxB  && auxC";
            conjB = eval(this.chequear);
          }
          if (this.operadores[1] === 1) {
            this.chequear = "auxB || auxC";
            conjB = eval(this.chequear);
          }
          if (this.operadores[1] === 2) {
            if (auxB && auxC) {
              conjB = 1;
            }
            if (auxB === 1 && auxC === 0) {
              conjB = 0;
            }
            if (auxB === 0 && auxC === 1) {
              conjB = 1;
            }
            if (auxB === 0 && auxC === 0) {
              conjB = 1;
            }
          }
          if (this.operadores[1] === 3) {
            if (auxB && auxC) {
              conjB = 1;
            }
            if (auxB === 1 && auxC === 0) {
              conjB = 0;
            }
            if (auxB === 0 && auxC === 1) {
              conjB = 0;
            }
            if (auxB === 0 && auxC === 0) {
              conjB = 1;
            }
          }
          if (this.operadores[1] === 4) {
            this.chequear = "( auxB && !auxC ) || ( !auxB && auxC )";
            conjB = eval(this.chequear);
          }
          if (this.operadores[1] === 5) {
            this.chequear = "!( auxB  &&  auxC )";
            conjB = eval(this.chequear);
          }
          if (this.operadores[1] === 6) {
            this.chequear = "!( auxB  ||  auxC )";
            conjB = eval(this.chequear);
          }
          if (this.operadores[0] === 0) {
            this.chequear = "auxA && conjB";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[0] === 1) {
            this.chequear = "auxA || conjB";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[0] === 2) {
            if (conjB === true) {
              conjB = 1;
            }
            if (conjB === false) {
              conjB = 0;
            }
            if (auxA === 1 && conjB === 1) {
              this.resultado = 1;
            }
            if (auxA === 1 && conjB === 0) {
              this.resultado = 0;
            }
            if (auxA === 0 && conjB === 1) {
              this.resultado = 1;
            }
            if (auxA === 0 && conjB === 0) {
              this.resultado = 1;
            }
          }
          if (this.operadores[0] === 3) {
            if (conjB === true) {
              conjB = 1;
            }
            if (conjB === false) {
              conjB = 0;
            }
            if (auxA === 1 && conjB === 1) {
              this.resultado = 1;
            }
            if (auxA === 0 && conjB === 1) {
              this.resultado = 0;
            }
            if (auxA === 1 && conjB === 0) {
              this.resultado = 0;
            }
            if (auxA === 0 && conjB === 0) {
              this.resultado = 1;
            }
          }
          if (this.operadores[0] === 4) {
            this.chequear = "( auxA && !conjB ) || ( !auxA && conjB )";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[0] === 5) {
            this.chequear = "!( auxA && conjB )";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[0] === 6) {
            this.chequear = "!( auxA || conjB )";
            this.resultado = eval(this.chequear);
          }
        }
        resultadoA = this.resultado;
        salidaA = " ( " + this.salida + " ) ";
      }
      experiment = myLevelLogic;
      if (experiment === 2 && programa !== 2 && programa !== 1) {
        vA = "";
        vB = "";
        oA = "";
        this.salida = "";
        if (_.random(0, 1)) {
          this.cantidadProposiciones = 2;
          escondertm = 1;
          this.variables[0] = mValor[2];
          this.variables[1] = mValor[3];
          this.operadores[0] = _.random(0, 1);
          this.operadores[2] = _.random(0, 1);
          this.operadores[1] = _.random(0, 6);
          if (this.operadores[0]) {
            this.salida += "~";
            vA = "!" + "this.variables[0]";
          } else {
            vA = "this.variables[0]";
          }
          if (this.operadores[2]) {
            vB = "!" + "this.variables[1]";
          } else {
            vB = "this.variables[1]";
          }

          /*
          				if @variables[0]
          					@salida += "V"
          				else
          					@salida += "F"
           */
          this.salida += mSalida[2];
          auxA = eval(vA);
          auxB = eval(vB);
          if (auxA === true) {
            auxA = 1;
          }
          if (auxA === false) {
            auxA = 0;
          }
          if (auxB === true) {
            auxB = 1;
          }
          if (auxB === false) {
            auxB = 0;
          }
          this.espacios = "&nbsp;";
          if (this.operadores[1] === 0) {
            this.salida += this.espacios + " <img src='/em/img/smash.gif'> " + this.espacios;
            oA += " && ";
            this.chequear = vA + oA + vB;
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 1) {
            this.salida += this.espacios + " <img src='/em/img/wedge.gif'> " + this.espacios;
            oA += " || ";
            this.chequear = vA + oA + vB;
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 2) {
            this.salida += this.espacios + " -&#62; " + this.espacios;
            if (auxA && auxB) {
              this.resultado = 1;
            }
            if (auxA === 1 && auxB === 0) {
              this.resultado = 0;
            }
            if (auxA === 0 && auxB === 1) {
              this.resultado = 1;
            }
            if (auxA === 0 && auxB === 0) {
              this.resultado = 1;
            }
          }
          if (this.operadores[1] === 3) {
            this.salida += this.espacios + " &#60-&#62; " + this.espacios;
            if (auxA && auxB) {
              this.resultado = 1;
            }
            if (auxA === 1 && auxB === 0) {
              this.resultado = 0;
            }
            if (auxA === 0 && auxB === 1) {
              this.resultado = 0;
            }
            if (auxA === 0 && auxB === 0) {
              this.resultado = 1;
            }
          }
          if (this.operadores[1] === 4) {
            this.salida += this.espacios + " <img src='/em/img/xor.png'> " + this.espacios;
            this.chequear = "( auxA && !auxB ) || ( !auxA && auxB )";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 5) {
            this.salida += this.espacios + " <img src='/em/img/nand.png'> " + this.espacios;
            oA = " && ";
            this.chequear = "!(" + vA + oA + vB + ")";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[1] === 6) {
            this.salida += this.espacios + " <img src='/em/img/nor.png'> " + this.espacios;
            oA = " || ";
            this.chequear = "!(" + vA + oA + vB + ")";
            this.resultado = eval(this.chequear);
          }
          if (this.operadores[2]) {
            this.salida += "~";
          }

          /*
          				if @variables[1]
          					@salida += "V"
          				else
          					@salida += "F"
           */
          this.salida += mSalida[3];
          salidaB = " ( " + this.salida + " ) ";
          resultadoB = this.resultado;
        } else {
          this.cantidadProposiciones = 3;
          if ($("#facilLogica").is(':checked')) {
            this.logica();
            return;
          }
          opArray = ["<img src='/em/img/smash.gif'>", "<img src='/em/img/wedge.gif'>", " -&#62; ", " &#60-&#62; ", "<img src='/em/img/xor.png'>", "<img src='/em/img/nand.png'>", "<img src='/em/img/nor.png'>"];
          auxA = "";
          auxB = "";
          auxC = "";
          conjA = "";
          conjB = "";
          parentesis = 0;
          parentesis = _.random(0, 1);
          this.variables[0] = mValor[3];
          this.variables[1] = mValor[4];
          this.variables[2] = mValor[5];
          this.operadores[0] = _.random(0, 6);
          this.operadores[1] = _.random(0, 6);
          this.operadores[2] = -1;
          auxA = this.variables[0];
          auxB = this.variables[1];
          auxC = this.variables[2];
          if (this.variables[0]) {
            if (parentesis === 0) {
              this.salida += "(" + mSalida[3];
            } else {
              this.salida += "" + mSalida[3];
            }
          } else {
            if (parentesis === 0) {
              this.salida += "(" + mSalida[3];
            } else {
              this.salida += "" + mSalida[3];
            }
          }
          this.salida += " " + opArray[this.operadores[0]] + " ";
          if (this.variables[1]) {
            if (parentesis === 0) {
              this.salida += mSalida[4] + ")";
            } else {
              this.salida += "(" + mSalida[4];
            }
          } else {
            if (parentesis === 0) {
              this.salida += mSalida[4] + ")";
            } else {
              this.salida += "(" + mSalida[4];
            }
          }
          this.salida += " " + opArray[this.operadores[1]] + " ";
          if (this.variables[2]) {
            if (parentesis === 0) {
              this.salida += "" + mSalida[5];
            } else {
              this.salida += mSalida[5] + ")";
            }
          } else {
            if (parentesis === 0) {
              this.salida += "" + mSalida[5];
            } else {
              this.salida += mSalida[5] + ")";
            }
          }
          if (parentesis === 0) {
            if (this.operadores[0] === 0) {
              this.chequear = "auxA  && auxB";
              conjA = eval(this.chequear);
            }
            if (this.operadores[0] === 1) {
              this.chequear = "auxA || auxB";
              conjA = eval(this.chequear);
            }
            if (this.operadores[0] === 2) {
              if (auxA && auxB) {
                conjA = 1;
              }
              if (auxA === 1 && auxB === 0) {
                conjA = 0;
              }
              if (auxA === 0 && auxB === 1) {
                conjA = 1;
              }
              if (auxA === 0 && auxB === 0) {
                conjA = 1;
              }
            }
            if (this.operadores[0] === 3) {
              if (auxA && auxB) {
                conjA = 1;
              }
              if (auxA === 1 && auxB === 0) {
                conjA = 0;
              }
              if (auxA === 0 && auxB === 1) {
                conjA = 0;
              }
              if (auxA === 0 && auxB === 0) {
                conjA = 1;
              }
            }
            if (this.operadores[0] === 4) {
              this.chequear = "( auxA && !auxB ) || ( !auxA && auxB )";
              conjA = eval(this.chequear);
            }
            if (this.operadores[0] === 5) {
              this.chequear = "!( auxA  &&  auxB )";
              conjA = eval(this.chequear);
            }
            if (this.operadores[0] === 6) {
              this.chequear = "!( auxA  ||  auxB )";
              conjA = eval(this.chequear);
            }
            if (this.operadores[1] === 0) {
              this.chequear = "conjA && auxC";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[1] === 1) {
              this.chequear = "conjA || auxC";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[1] === 2) {
              if (conjA === true) {
                conjA = 1;
              }
              if (conjA === false) {
                conjA = 0;
              }
              if (conjA === 1 && auxC === 1) {
                this.resultado = 1;
              }
              if (conjA === 1 && auxC === 0) {
                this.resultado = 0;
              }
              if (conjA === 0 && auxC === 1) {
                this.resultado = 1;
              }
              if (conjA === 0 && auxC === 0) {
                this.resultado = 1;
              }
            }
            if (this.operadores[1] === 3) {
              if (conjA === true) {
                conjA = 1;
              }
              if (conjA === false) {
                conjA = 0;
              }
              if (conjA === 1 && auxC === 1) {
                this.resultado = 1;
              }
              if (conjA === 1 && auxC === 0) {
                this.resultado = 0;
              }
              if (conjA === 0 && auxC === 1) {
                this.resultado = 0;
              }
              if (conjA === 0 && auxC === 0) {
                this.resultado = 1;
              }
            }
            if (this.operadores[1] === 4) {
              this.chequear = "( conjA && !auxC ) || ( !conjA && auxC )";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[1] === 5) {
              this.chequear = "!( conjA && auxC )";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[1] === 6) {
              this.chequear = "!( conjA || auxC )";
              this.resultado = eval(this.chequear);
            }
          } else {
            if (this.operadores[1] === 0) {
              this.chequear = "auxB  && auxC";
              conjB = eval(this.chequear);
            }
            if (this.operadores[1] === 1) {
              this.chequear = "auxB || auxC";
              conjB = eval(this.chequear);
            }
            if (this.operadores[1] === 2) {
              if (auxB && auxC) {
                conjB = 1;
              }
              if (auxB === 1 && auxC === 0) {
                conjB = 0;
              }
              if (auxB === 0 && auxC === 1) {
                conjB = 1;
              }
              if (auxB === 0 && auxC === 0) {
                conjB = 1;
              }
            }
            if (this.operadores[1] === 3) {
              if (auxB && auxC) {
                conjB = 1;
              }
              if (auxB === 1 && auxC === 0) {
                conjB = 0;
              }
              if (auxB === 0 && auxC === 1) {
                conjB = 0;
              }
              if (auxB === 0 && auxC === 0) {
                conjB = 1;
              }
            }
            if (this.operadores[1] === 4) {
              this.chequear = "( auxB && !auxC ) || ( !auxB && auxC )";
              conjB = eval(this.chequear);
            }
            if (this.operadores[1] === 5) {
              this.chequear = "!( auxB  &&  auxC )";
              conjB = eval(this.chequear);
            }
            if (this.operadores[1] === 6) {
              this.chequear = "!( auxB  ||  auxC )";
              conjB = eval(this.chequear);
            }
            if (this.operadores[0] === 0) {
              this.chequear = "auxA && conjB";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[0] === 1) {
              this.chequear = "auxA || conjB";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[0] === 2) {
              if (conjB === true) {
                conjB = 1;
              }
              if (conjB === false) {
                conjB = 0;
              }
              if (auxA === 1 && conjB === 1) {
                this.resultado = 1;
              }
              if (auxA === 1 && conjB === 0) {
                this.resultado = 0;
              }
              if (auxA === 0 && conjB === 1) {
                this.resultado = 1;
              }
              if (auxA === 0 && conjB === 0) {
                this.resultado = 1;
              }
            }
            if (this.operadores[0] === 3) {
              if (conjB === true) {
                conjB = 1;
              }
              if (conjB === false) {
                conjB = 0;
              }
              if (auxA === 1 && conjB === 1) {
                this.resultado = 1;
              }
              if (auxA === 0 && conjB === 1) {
                this.resultado = 0;
              }
              if (auxA === 1 && conjB === 0) {
                this.resultado = 0;
              }
              if (auxA === 0 && conjB === 0) {
                this.resultado = 1;
              }
            }
            if (this.operadores[0] === 4) {
              this.chequear = "( auxA && !conjB ) || ( !auxA && conjB )";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[0] === 5) {
              this.chequear = "!( auxA && conjB )";
              this.resultado = eval(this.chequear);
            }
            if (this.operadores[0] === 6) {
              this.chequear = "!( auxA || conjB )";
              this.resultado = eval(this.chequear);
            }
          }
          resultadoB = this.resultado;
          salidaB = " ( " + this.salida + " ) ";
        }
        this.salida = "";
        vA = "";
        vB = "";
        oA = "";
        this.cantidadProposiciones = 2;
        escondertm = 1;
        this.variables[0] = resultadoA;
        this.variables[1] = resultadoB;
        this.operadores[0] = _.random(0, 1);
        this.operadores[2] = _.random(0, 1);
        this.operadores[1] = _.random(0, 6);
        if (this.operadores[0]) {
          this.salida += "~";
          vA = "!" + "this.variables[0]";
        } else {
          vA = "this.variables[0]";
        }
        if (this.operadores[2]) {
          vB = "!" + "this.variables[1]";
        } else {
          vB = "this.variables[1]";
        }

        /*
        			if @variables[0]
        				@salida += "V"
        			else
        				@salida += "F"
         */
        this.salida += salidaA;
        auxA = eval(vA);
        auxB = eval(vB);
        if (auxA === true) {
          auxA = 1;
        }
        if (auxA === false) {
          auxA = 0;
        }
        if (auxB === true) {
          auxB = 1;
        }
        if (auxB === false) {
          auxB = 0;
        }
        this.espacios = "&nbsp;";
        if (this.operadores[1] === 0) {
          this.salida += this.espacios + " <img src='/em/img/smash.gif'> " + this.espacios;
          oA += " && ";
          this.chequear = vA + oA + vB;
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 1) {
          this.salida += this.espacios + " <img src='/em/img/wedge.gif'> " + this.espacios;
          oA += " || ";
          this.chequear = vA + oA + vB;
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 2) {
          this.salida += this.espacios + " -&#62; " + this.espacios;
          if (auxA && auxB) {
            this.resultado = 1;
          }
          if (auxA === 1 && auxB === 0) {
            this.resultado = 0;
          }
          if (auxA === 0 && auxB === 1) {
            this.resultado = 1;
          }
          if (auxA === 0 && auxB === 0) {
            this.resultado = 1;
          }
        }
        if (this.operadores[1] === 3) {
          this.salida += this.espacios + " &#60-&#62; " + this.espacios;
          if (auxA && auxB) {
            this.resultado = 1;
          }
          if (auxA === 1 && auxB === 0) {
            this.resultado = 0;
          }
          if (auxA === 0 && auxB === 1) {
            this.resultado = 0;
          }
          if (auxA === 0 && auxB === 0) {
            this.resultado = 1;
          }
        }
        if (this.operadores[1] === 4) {
          this.salida += this.espacios + " <img src='/em/img/xor.png'> " + this.espacios;
          this.chequear = "( auxA && !auxB ) || ( !auxA && auxB )";
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 5) {
          this.salida += this.espacios + " <img src='/em/img/nand.png'> " + this.espacios;
          oA = " && ";
          this.chequear = "!(" + vA + oA + vB + ")";
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[1] === 6) {
          this.salida += this.espacios + " <img src='/em/img/nor.png'> " + this.espacios;
          oA = " || ";
          this.chequear = "!(" + vA + oA + vB + ")";
          this.resultado = eval(this.chequear);
        }
        if (this.operadores[2]) {
          this.salida += "~";
        }

        /*
        			if @variables[1]
        				@salida += "V"
        			else
        				@salida += "F"
         */
        this.salida += salidaB;
      }
      if (programa === 0) {
        $("#screen").html("<h4> <center id=\"show-logic\"> <div id=\"question-1\"> " + salidaTestMemoryTotal + " </div> <br><br> <div id=\"texto-ayuda-1\">Click or press \"C\" to show question</div> </center>  <br> <span class=\"salida-logic\"> " + this.salida + " </span> </h4> <br> <div id=\"textoAyudaEmocion\"></div> ");
      } else {
        $("#screen").html("<h4>  <span class=\"salida-logic\"> " + this.salida + " </span> </h4> <br> <div id=\"textoAyudaEmocion\"></div> ");
      }
      textLogic = this.salida;
      valueLogic = this.resultado;
      if (testMemory && programa === 0) {
        this.tiempoEjercicios[this.ejercicioSeleccionado][1] = 90000;
        this.tiempoEjercicios[this.ejercicioSeleccionado][0] = 90001;
        $(".salida-logic").hide();
        $("#texto-ayuda-1").hide();
      }
      $("#show-logic").click((function(_this) {
        return function() {
          $(".salida-logic").show();
          $("#texto-ayuda-1").hide();
          return $("#question-1").hide();
        };
      })(this));
      if (testMemory === 0) {
        $("#texto-ayuda-1").hide();
        console.log("texto ayuda hide");
      }
      this.t_ini = Date.now();
      if ($("#helpMode").is(':checked')) {
        console.log("");
        $("#texto-ayuda-1").show();
        $("#liveHelp1").html("<br><br><img src=\"/em/img/logic.png\">");
      }
      this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[_this.ejercicioSeleccionado][1]);
        };
      })(this)), this.tiempoEjercicios[this.ejercicioSeleccionado][0]);
      if (this.cantidadIncluido > 0) {
        return this.killTimeout7 = setInterval(((function(_this) {
          return function() {
            var n, ref1, restar, s, str, u;
            if (_this.cantidadProposiciones === 2) {
              restar = 2;
            } else {
              restar = 1;
            }
            if (_this.contadorIncluido === 9) {
              _this.contadorIncluido = 0;
            }
            for (yy = u = 0, ref1 = _this.cantidadIncluido - 1; 0 <= ref1 ? u <= ref1 : u >= ref1; yy = 0 <= ref1 ? ++u : --u) {
              str = _this.emocionesIncluidas[yy][_this.contadorIncluido];
              n = str.search("emociones");
              s = str.search("meme");
              if (s === -1) {
                if (n === -1) {
                  myClass = " class=\"emoji-img\" ";
                } else {
                  myClass = " class=\"emo-img\" ";
                }
              } else {
                myClass = " class=\"meme-img\" ";
              }
              $("#incluido" + yy).html("<img src=\"" + _this.emocionesIncluidas[yy][_this.contadorIncluido] + "\"  " + myClass + ">");
              console.log("#incluido" + yy + "|" + _this.contadorIncluido + "|<img src=\"" + _this.emocionesIncluidas[yy][_this.contadorIncluido] + "\"> ");
            }
            return _this.contadorIncluido += 1;
          };
        })(this)), 150);
      }
    };

    motorReaction.prototype.guardarResultado = function() {
      var m, ref, xx;
      for (xx = m = 0, ref = this.totalEjercicios; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
        this.resultados[xx][this.jugadas] = null;
      }
      if (this.tieneMemoria && this.jugadas === 0) {
        return;
      }
      if (this.ejercicioSeleccionado === 3) {
        return;
      }
      return this.resultados[this.ejercicioSeleccionado][this.jugadas] = this.t_dif;
    };

    motorReaction.prototype.dibujarGrafico = function() {
      var color, continuar, data, label, labels, lineChartData, m, myDataset, o, p, q, ref, ref1, ref2, ref3, xx, yy, zz;
      labels = "";
      lineChartData = "";
      for (xx = m = 0, ref = this.totalPasadas - 1; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
        labels += "\"" + (xx + 1) + "\"";
        if (xx < this.totalPasadas - 1) {
          labels += ",";
        }
      }
      myDataset = "";
      for (xx = o = 0, ref1 = this.totalEjercicios; 0 <= ref1 ? o <= ref1 : o >= ref1; xx = 0 <= ref1 ? ++o : --o) {
        label = this.leyendaResultados[xx];
        color = this.coloresResultados[xx];
        data = "";
        continuar = 1;
        for (yy = p = 0, ref2 = this.totalPasadas - 1; 0 <= ref2 ? p <= ref2 : p >= ref2; yy = 0 <= ref2 ? ++p : --p) {
          if (this.resultados[xx][yy] !== null) {
            continuar = 0;
          }
        }
        if (continuar) {
          continue;
        }
        for (zz = q = 0, ref3 = this.totalPasadas - 1; 0 <= ref3 ? q <= ref3 : q >= ref3; zz = 0 <= ref3 ? ++q : --q) {
          data += this.resultados[xx][zz];
          if (zz < this.totalPasadas - 1) {
            data += ",";
          }
        }
        myDataset += "{\n	label: \"" + label + "\",\n	fillColor : \"" + color + ",0.2)\",\n	strokeColor : \"" + color + ",1)\",\n	pointColor : \"" + color + ",1)\",\n	pointStrokeColor : \"#fff\",\n	pointHighlightFill : \"#fff\",\n	pointHighlightStroke : \"" + color + ",1)\",\n	data : [" + data + "]\n},";
      }
      myDataset = myDataset.substring(0, myDataset.length - 1);
      window.lineChartData = eval("({\n	labels : [" + labels + "],\n	datasets : [" + myDataset + "]\n})\n");
      return graficar();
    };

    motorReaction.prototype.checkPosicion = function(x) {
      var aux, div_prom, fechaPrint, mejora_txt, pasadas_txt, penalizacion, puntaje, puntaje_txt, rec_txt, t_txt, timePrint;
      $("#liveHelp").html("");
      $("#liveHelp1").html("");
      $("#timer").hide();
      if (!this.estado) {
        return;
      }
      if (!this.pausa) {
        this.memoriaJugadas = 0;
        this.t_fin = Date.now();
        if (this.ejercicioSeleccionado !== 7) {
          clearTimeout(this.killTimeout);
        }
        clearTimeout(this.killTimeout1);
        clearTimeout(this.killTimeout3);
        clearInterval(this.killTimeout5);
        clearInterval(this.killTimeout7);
        this.pausa = 1;
        this.t_dif = this.t_fin - this.t_ini;
        if (this.resultado === 1) {
          this.resultado = true;
        }
        if (this.resultado === 0) {
          this.resultado = false;
        }
        if (x === 3) {
          x = !this.resultado;
        }
        aux = 0;
        penalizacion = 0;
        if (this.resultado === x) {
          this.aciertos++;
          this.contador++;
          if (this.ejercicioSeleccionado !== 3 && this.ejercicioSeleccionado !== 7) {
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 100) {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(25);
            } else {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(5);
            }
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 70) {
              this.tiempoEjercicios[this.ejercicioSeleccionado][0] = aux;
            }
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] <= 100) {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(25);
            } else {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(5);
            }
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] > 70) {
              this.tiempoEjercicios[this.ejercicioSeleccionado][1] = aux;
            }
          }
        } else {
          this.errores++;
          this.contador = 0;
          penalizacion = 2000;
          this.erroresEjercicios[this.ejercicioSeleccionado] += 1;
          if (this.ejercicioSeleccionado !== 3 && this.ejercicioSeleccionado !== 7) {
            if (this.erroresEjercicios[this.ejercicioSeleccionado] === 2) {
              this.erroresEjercicios[this.ejercicioSeleccionado] = 0;
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) + parseInt(50);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) + parseInt(10);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][0] = aux;
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] < 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) + parseInt(50);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) + parseInt(10);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][1] = aux;
            }
            if (this.jugadas === 0 && this.tieneMemoria) {
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(25);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(5);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][0] = aux;
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] > 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(25);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(5);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][1] = aux;
            }
          }
        }

        /*if @ejercicioSeleccionado != 7
        
        				$("#t#{@ejercicioSeleccionado}").val(@tiempoEjercicios[@ejercicioSeleccionado][0])
        				$("#tt#{@ejercicioSeleccionado}").val(@tiempoEjercicios[@ejercicioSeleccionado][1])
         */
        $("#ok").html(this.aciertos);
        $("#no").html(this.errores);
        this.t_dif += penalizacion;
        this.t_total += this.t_dif;
        this.guardarResultado();
        if (this.jugadas < this.totalPasadas - 1) {
          this.jugadas++;
          return setTimeout(((function(_this) {
            return function() {
              return _this.iniciar();
            };
          })(this)), this.nextQuestionDelay);
        } else {
          this.t_promedio = this.t_total / this.totalPasadas;
          if (this.pasadas === 0) {
            div_prom = 1;
          } else {
            div_prom = 2;
          }
          this.promedio_total = (this.promedio_total + this.t_promedio) / div_prom;
          mejora_txt = "";
          if (this.pasadas > 0) {
            this.mejora = this.promedio_total - this.t_promedio;
            mejora_txt = "Rendimiento: " + Math.round(this.mejora) + " ms";
          }
          this.pasadas++;
          pasadas_txt = this.pasadas + 1;
          t_txt = "";
          puntaje = Math.round(this.aciertos * 100 / this.totalPasadas);
          puntaje_txt = puntaje + "%<br>" + this.aciertos + "-" + this.errores;
          rec_txt = "";
          console.log("t_total:" + this.t_total + "-" + this.t_total / 1000 + "| t_promedio:" + this.t_promedio + "-" + this.t_promedio / 1000);
          if (this.senglarMindMode) {
            console.log("Results");
            this.timeEndSenglarMindMode = Date.now();
            this.timeDiffSenglarMindMode = this.timeEndSenglarMindMode - this.timeInitSenglarMindMode;
            timePrint = getDuration(this.timeDiffSenglarMindMode);
            fechaPrint = moment().format('D MMM, YYYY');
            return setTimeout(((function(_this) {
              return function() {
                return $("#screen").html("<h3>30 Potencias de dos cifras - Senglar Mind - " + fechaPrint + " </h3><br>\n\nTiempo total respuestas: " + timePrint + "\n				");
              };
            })(this)), 500);
          } else {
            return setTimeout(((function(_this) {
              return function() {
                var sl;
                _this.cls();
                _this.t_dif;
                sl = 5;
                $("#controlesMR").show();
                $("#controles2").show();
                if (_this.totalPasadas > 60) {
                  sl = 6;
                }
                $("#screen").html("<h3>Resultados</h3><br>\n\nTiempo total respuestas: " + (getDuration(_this.t_total)) + " | Promedio de tiempo " + (getDuration(_this.t_promedio)) + " | Penalizacion iconrrectas 2 seg. <br>\n								\n<div style=\"width: 1000px;\">\n				                    <div>\n				                        <canvas id=\"canvas\" height=\"200\" width=\"400\"></canvas>\n				                    </div>\n				                </div> 	");
                if (_this.totalPasadas < 60) {
                  _this.dibujarGrafico();
                }
                _this.estado = 0;
                _this.parar = 1;
                return $("#boton-comenzar").attr('value', '▶');
              };
            })(this)), 500);
          }
        }
      }
    };

    motorReaction.prototype.cls = function() {
      return $("#screen").html("<h4>&nbsp;</h4>");
    };

    motorReaction.prototype.tiempo = function() {
      $("#timer").show();
      $("#timerAdentro").css("width", "100%");
      return this.killTimeout5 = setInterval(((function(_this) {
        return function() {
          var marcar, t_dif, t_fin, t_total;
          t_fin = Date.now();
          t_dif = t_fin - _this.t_ini;
          t_total = parseInt(_this.tiempoEjercicios[_this.ejercicioSeleccionado][0]) + parseInt(_this.tiempoEjercicios[_this.ejercicioSeleccionado][1]);
          marcar = 100 - t_dif * 100 / t_total;
          return $("#timerAdentro").css("width", marcar + "%");
        };
      })(this)), 1000);
    };

    motorReaction.prototype.tiempo2 = function() {
      return this.killTimeout6 = setInterval(((function(_this) {
        return function() {
          _this.segundos -= 1;
          if (_this.segundos === 0) {
            return $("#screen").html("");
          } else {
            return $("#screen").html("<center><h4>" + _this.segundos + "</h4></center>");
          }
        };
      })(this)), 1000);
    };

    return motorReaction;

  })();

  $(window).ready(function() {
    return window.juegoReaction = new motorReaction();
  });

}).call(this);

