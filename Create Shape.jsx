var kadomaru = new createDialog_DLG(); 

initializeBuilder(kadomaru);

if(runBuilder(kadomaru)){
	runProcessing(kadomaru);
}

// ===========================================================================
function createDialog_DLG(){
	var dialogResource = "dialog { text:'シェイプ作成 　Dearps', bounds:[0, 0, 243, 195], "
	dialogResource += " pnl: Panel { text:'シェイプサイズ', bounds:[15, 8, 227, 136], "
	dialogResource += " str: StaticText { text:'px', bounds:[167, 23, 215, 36],  }, "
	dialogResource += " str: StaticText { text:'幅', bounds:[42, 23, 90, 36],  }, "
	dialogResource += " haba: EditText { bounds:[97, 23, 158, 41],  }, "
	dialogResource += " str: StaticText { text:'px', bounds:[167, 57, 215, 70],  }, "
	dialogResource += " str: StaticText { text:'高さ', bounds:[42, 57, 90, 70],  }, "
	dialogResource += " takasa: EditText { bounds:[97, 57, 158, 75],  }, "
	dialogResource += " str: StaticText { text:'px', bounds:[167, 90, 215, 103],  }, "
	dialogResource += " str: StaticText { text:'角丸', bounds:[42, 90, 90, 103],  }, "
	dialogResource += " kadomaru: EditText { bounds:[97, 90, 158, 108],  }, "
	dialogResource += " }," 
	dialogResource += " build: Button { text:'実行', bounds:[128, 158, 212, 182],  }, "
	dialogResource += " cancel: Button { text:'キャンセル', bounds:[28, 158, 112, 182],  }, "
	dialogResource += " }";

	var dlg = new Window( dialogResource );
	dlg.center();
	return dlg;
}
// ダイアログ（ボタンを押したときなどの動作設定）=============================
function initializeBuilder(builder){
	with(builder){
		//ここに必須入力チェックなど
		
		
		//初期値
		pnl.haba.text = 100;	//幅
		pnl.takasa.text = 100;	//高さ
		pnl.kadomaru.text = 0;	//角丸

		
		//ボタンイベント
		cancel.onClick = function(){ this.parent.close( false ); };
		build.onClick = function(){ this.parent.close( true ); };
	}
}

// ダイアログ（起動・実行）===================================================
function runBuilder(builder){
  return builder.show();
}

// ===========================================================================
// 実行したい処理=============================================================
function runProcessing(builder){
var width;
var height;
var round;

	with(builder){
		width =pnl.haba.text;	//幅
		height =pnl.takasa.text;	//高さ
		round =pnl.kadomaru.text;	//角丸
	}
	
	var id212 = charIDToTypeID( "Mk  " );
    var desc42 = new ActionDescriptor();
    var id213 = charIDToTypeID( "null" );
        var ref27 = new ActionReference();
        var id214 = stringIDToTypeID( "contentLayer" );
        ref27.putClass( id214 );
    desc42.putReference( id213, ref27 );
    var id215 = charIDToTypeID( "Usng" );
        var desc43 = new ActionDescriptor();
        var id216 = charIDToTypeID( "Type" );
        var id217 = stringIDToTypeID( "solidColorLayer" );
        desc43.putClass( id216, id217 );
        var id218 = charIDToTypeID( "Shp " );
            var desc44 = new ActionDescriptor();
            var id219 = charIDToTypeID( "Top " );
            var id220 = charIDToTypeID( "#Pxl" );
            desc44.putUnitDouble( id219, id220, 0 );
            var id221 = charIDToTypeID( "Left" );
            var id222 = charIDToTypeID( "#Pxl" );
            desc44.putUnitDouble( id221, id222, 0 );
            var id223 = charIDToTypeID( "Btom" );
            var id224 = charIDToTypeID( "#Pxl" );
            desc44.putUnitDouble( id223, id224, height );
            var id225 = charIDToTypeID( "Rght" );
            var id226 = charIDToTypeID( "#Pxl" );
            desc44.putUnitDouble( id225, id226, width );
            var id227 = charIDToTypeID( "Rds " );
            var id228 = charIDToTypeID( "#Pxl" );
            desc44.putUnitDouble( id227, id228, round );
        var id229 = charIDToTypeID( "Rctn" );
        desc43.putObject( id218, id229, desc44 );
    var id230 = stringIDToTypeID( "contentLayer" );
    desc42.putObject( id215, id230, desc43 );
executeAction( id212, desc42, DialogModes.NO );

//選択範囲　すべて
var id380 = charIDToTypeID( "setd" );
    var desc71 = new ActionDescriptor();
    var id381 = charIDToTypeID( "null" );
        var ref46 = new ActionReference();
        var id382 = charIDToTypeID( "Chnl" );
        var id383 = charIDToTypeID( "fsel" );
        ref46.putProperty( id382, id383 );
    desc71.putReference( id381, ref46 );
    var id384 = charIDToTypeID( "T   " );
    var id385 = charIDToTypeID( "Ordn" );
    var id386 = charIDToTypeID( "Al  " );
    desc71.putEnumerated( id384, id385, id386 );
executeAction( id380, desc71, DialogModes.NO );

// 中央寄せ
var id387 = charIDToTypeID( "Algn" );
    var desc72 = new ActionDescriptor();
    var id388 = charIDToTypeID( "null" );
        var ref47 = new ActionReference();
        var id389 = charIDToTypeID( "Lyr " );
        var id390 = charIDToTypeID( "Ordn" );
        var id391 = charIDToTypeID( "Trgt" );
        ref47.putEnumerated( id389, id390, id391 );
    desc72.putReference( id388, ref47 );
    var id392 = charIDToTypeID( "Usng" );
    var id393 = charIDToTypeID( "ADSt" );
    var id394 = charIDToTypeID( "AdCV" );
    desc72.putEnumerated( id392, id393, id394 );
executeAction( id387, desc72, DialogModes.NO );

// 中央寄せ
var id395 = charIDToTypeID( "Algn" );
    var desc73 = new ActionDescriptor();
    var id396 = charIDToTypeID( "null" );
        var ref48 = new ActionReference();
        var id397 = charIDToTypeID( "Lyr " );
        var id398 = charIDToTypeID( "Ordn" );
        var id399 = charIDToTypeID( "Trgt" );
        ref48.putEnumerated( id397, id398, id399 );
    desc73.putReference( id396, ref48 );
    var id400 = charIDToTypeID( "Usng" );
    var id401 = charIDToTypeID( "ADSt" );
    var id402 = charIDToTypeID( "AdCH" );
    desc73.putEnumerated( id400, id401, id402 );
executeAction( id395, desc73, DialogModes.NO );

// 選択範囲解除
var id403 = charIDToTypeID( "setd" );
    var desc74 = new ActionDescriptor();
    var id404 = charIDToTypeID( "null" );
        var ref49 = new ActionReference();
        var id405 = charIDToTypeID( "Chnl" );
        var id406 = charIDToTypeID( "fsel" );
        ref49.putProperty( id405, id406 );
    desc74.putReference( id404, ref49 );
    var id407 = charIDToTypeID( "T   " );
    var id408 = charIDToTypeID( "Ordn" );
    var id409 = charIDToTypeID( "None" );
    desc74.putEnumerated( id407, id408, id409 );
executeAction( id403, desc74, DialogModes.NO );

// レイヤー名変更
var id37 = charIDToTypeID( "setd" );
    var desc6 = new ActionDescriptor();
    var id38 = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var id39 = charIDToTypeID( "Lyr " );
        var id40 = charIDToTypeID( "Ordn" );
        var id41 = charIDToTypeID( "Trgt" );
        ref2.putEnumerated( id39, id40, id41 );
    desc6.putReference( id38, ref2 );
    var id42 = charIDToTypeID( "T   " );
        var desc7 = new ActionDescriptor();
        var id43 = charIDToTypeID( "Nm  " );
        desc7.putString( id43, "シェイプ"+ " " +  "W" + width + " " + "H" + height + " " + "R" + round );
    var id44 = charIDToTypeID( "Lyr " );
    desc6.putObject( id42, id44, desc7 );
executeAction( id37, desc6, DialogModes.NO );


}

// ===========================================================================
