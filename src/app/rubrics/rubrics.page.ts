import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubrics',
  templateUrl: './rubrics.page.html',
  styleUrls: ['./rubrics.page.scss'],
})
export class RubricsPage implements OnInit {

  constructor() { }

    ngOnInit() {
eval(`

`)

    }
    ionViewWillEnter() {
      // if (document.getElementById("cvlist").innerHTML.trim() == "") {
        eval(`
        if (document.getElementById("loadedRB").value != "done") {
          //document.getElementById("loadedRB").value = "done"
          all_mission = []
          buffer = ""
          rbchildren = []
          rbchildrenEX = []
          ssecct = 0 
          load2020CV()
          load2020RP()
          load2020RD()

      displayRBSaves();
      try {
        var segment = document.getElementsByClassName("rbsegment")[0];
        var slides = document.getElementsByClassName("rbslides")[0];

        segment.addEventListener('ionChange', (ev) => onSegmentChange(ev,"rb"));
        slides.addEventListener('ionSlideDidChange', (ev) => onSlideDidChange(ev,"rb"));
      } catch { }
      var fileInputT = document.getElementById('fileInputTRB');

      fileInputT.addEventListener('change', function (e) {
        var file = fileInputT.files[0];
        var textType = /text.*/;
    
        var reader = new FileReader();
    
        reader.onload = function (e) {
          data = reader.result;
          //alert(data)
    
          loadScoreRB(data)
          loadScoreRB(data)
        }
    
        reader.readAsText(file);
    
      });
    
      var fileInputRB = document.getElementById('fileInputRB');

      fileInputRB.addEventListener('change', function (e) {
          var file = document.getElementById('fileInputRB').files[0];
          var textType = /text.*/;

          var reader = new FileReader();

          reader.onload = function (e) {
              data = reader.result;
              //alert(data)

              window.localStorage.DRRBSMscorer = data.split('__LABEL__')[0];
              window.localStorage.DRRBSM2scorer = data.split('__LABEL__')[1];

              maximumRB = window.localStorage.DRRBSMscorer.split('&&&').length - 1

              displayRBSaves();
          }

          reader.readAsText(file);

      });

      rubricCalc()
    }
    initpage();switchLanguage();

      `)
    // }
  }

}
