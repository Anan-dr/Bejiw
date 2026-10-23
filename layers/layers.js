var wms_layers = [];

var format_Adminbejit_0 = new ol.format.GeoJSON();
var features_Adminbejit_0 = format_Adminbejit_0.readFeatures(json_Adminbejit_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adminbejit_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adminbejit_0.addFeatures(features_Adminbejit_0);
var lyr_Adminbejit_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adminbejit_0, 
                style: style_Adminbejit_0,
                popuplayertitle: 'Adminbejit',
                interactive: true,
                title: '<img src="styles/legend/Adminbejit_0.png" /> Adminbejit'
            });
var format_Jalan_beji26_1 = new ol.format.GeoJSON();
var features_Jalan_beji26_1 = format_Jalan_beji26_1.readFeatures(json_Jalan_beji26_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_beji26_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_beji26_1.addFeatures(features_Jalan_beji26_1);
var lyr_Jalan_beji26_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_beji26_1, 
                style: style_Jalan_beji26_1,
                popuplayertitle: 'Jalan_beji26',
                interactive: true,
                title: '<img src="styles/legend/Jalan_beji26_1.png" /> Jalan_beji26'
            });
var format_Sawah_beji26_2 = new ol.format.GeoJSON();
var features_Sawah_beji26_2 = format_Sawah_beji26_2.readFeatures(json_Sawah_beji26_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_beji26_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_beji26_2.addFeatures(features_Sawah_beji26_2);
var lyr_Sawah_beji26_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_beji26_2, 
                style: style_Sawah_beji26_2,
                popuplayertitle: 'Sawah_beji26',
                interactive: true,
                title: '<img src="styles/legend/Sawah_beji26_2.png" /> Sawah_beji26'
            });
var format_rumah_beji26_3 = new ol.format.GeoJSON();
var features_rumah_beji26_3 = format_rumah_beji26_3.readFeatures(json_rumah_beji26_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_beji26_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_beji26_3.addFeatures(features_rumah_beji26_3);
var lyr_rumah_beji26_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_beji26_3, 
                style: style_rumah_beji26_3,
                popuplayertitle: 'rumah_beji26',
                interactive: true,
                title: '<img src="styles/legend/rumah_beji26_3.png" /> rumah_beji26'
            });

lyr_Adminbejit_0.setVisible(true);lyr_Jalan_beji26_1.setVisible(true);lyr_Sawah_beji26_2.setVisible(true);lyr_rumah_beji26_3.setVisible(true);
var layersList = [lyr_Adminbejit_0,lyr_Jalan_beji26_1,lyr_Sawah_beji26_2,lyr_rumah_beji26_3];
lyr_Adminbejit_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_beji26_1.set('fieldAliases', {'id': 'id', 'lebar': 'lebar', });
lyr_Sawah_beji26_2.set('fieldAliases', {'id': 'id', });
lyr_rumah_beji26_3.set('fieldAliases', {'id': 'id', });
lyr_Adminbejit_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Jalan_beji26_1.set('fieldImages', {'id': '', 'lebar': '', });
lyr_Sawah_beji26_2.set('fieldImages', {'id': '', });
lyr_rumah_beji26_3.set('fieldImages', {'id': '', });
lyr_Adminbejit_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_beji26_1.set('fieldLabels', {'id': 'no label', 'lebar': 'no label', });
lyr_Sawah_beji26_2.set('fieldLabels', {'id': 'no label', });
lyr_rumah_beji26_3.set('fieldLabels', {'id': 'no label', });
lyr_rumah_beji26_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});