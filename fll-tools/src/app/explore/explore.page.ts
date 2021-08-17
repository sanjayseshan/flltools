import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor() { }

  ngOnInit() {
    eval(`
  
    `)
  }
    ionViewWillEnter() {
    // if (document.getElementById("cvlist").innerHTML.trim() == "") {
      eval(`
      
      if (document.getElementById("loadedEX").value != "done") {
        //document.getElementById("loadedEX").value = "done"
        rbchildren = []
      rbchildrenEX = []
      ssecct = 0  

      all_mission = []
      buffer = ""
      rbchildren = []
      rbchildrenEX = []
      ssecct = 0 
    load2020EX()

    try {
      displayRBSavesEX();
      var segment = document.getElementsByClassName("rbsegment")[0];
      var slides = document.getElementsByClassName("rbslides")[0];

      segment.addEventListener('ionChange', (ev) => onSegmentChange(ev,"rb"));
      slides.addEventListener('ionSlideDidChange', (ev) => onSlideDidChange(ev,"rb"));
    } catch { }
    var fileInputT = document.getElementById('fileInputTRBEX');

    fileInputT.addEventListener('change', function (e) {
      var file = fileInputT.files[0];
      var textType = /text.*/;
  
      var reader = new FileReader();
  
      reader.onload = function (e) {
        data = reader.result;
        //alert(data)
  
        loadScoreRBEX(data)
        loadScoreRBEX(data)
      }
  
      reader.readAsText(file);
  
    });
  

    document.getElementById('fileInputRBEX').addEventListener('change', function (e) {
        var file = document.getElementById('fileInputRBEX').files[0];
        var textType = /text.*/;

        var reader = new FileReader();

        reader.onload = function (e) {
            data = reader.result;
            //alert(data)

            window.localStorage.DRERBSscorer = data.split('__LABEL__')[0];
            window.localStorage.DRERBS2scorer = data.split('__LABEL__')[1];
            //maximumRB = window.localStorage.DRERBSscorer.split('&&&').length - 1
            displayRBSavesEX();
        }

        reader.readAsText(file);

    });

    rubricCalcEX()
  }
  initpage();switchLanguage();

    `)
  // }
}

}
