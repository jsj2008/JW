/*
jQWidgets v2.6.1 (2013-Jan-18)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.dataview.sort=function(){this.sortby=function(q,g,m){var n=Object.prototype.toString;if(g==null){this.sortdata=null;this.refresh();return}if(g==undefined){g=true}if(g=="a"||g=="asc"||g=="ascending"||g==true){g=true}else{g=false}var h=q;this.sortfield=q;this.sortfielddirection=g?"asc":"desc";if(this.sortcache==undefined){this.sortcache={}}this.sortdata=[];var s=[];var o=false;if(h=="constructor"){h=""}if(!this.virtualmode&&this.sortcache[h]!=null){var b=this.sortcache[h];s=b._sortdata;if(b.direction==g){s.reverse()}else{if(!b.direction&&g){s.reverse()}o=true}if(s.length<this.totalrecords){this.sortcache={};o=false;s=[]}}Object.prototype.toString=(typeof q=="function")?q:function(){return this[q]};var f=this.records;var p=this;var k="";if(this.source.datafields){a.each(this.source.datafields,function(){if(this.name==q){if(this.type){k=this.type}return false}})}if(s.length==0){if(f.length){var c=f.length;for(var j=0;j<c;j++){var l=f[j];if(l!=null){var r=l;var e=r.toString();s.push({sortkey:e,value:r,index:j})}}}else{var d=false;for(obj in f){var l=f[obj];if(l==undefined){d=true;break}var r=l;s.push({sortkey:r.toString(),value:r,index:obj})}if(d){a.each(f,function(t,u){s.push({sortkey:u.toString(),value:u,index:t})})}}}if(!o){if(m==null){s.sort(this._compare)}else{s.sort(m)}}if(!g){s.reverse()}Object.prototype.toString=n;this.sortdata=s;this.sortcache[h]={_sortdata:s,direction:g};this.reload(this.records,this.rows,this.filters,this.updated,true)},this.clearsortdata=function(){this.sortcache={};this.sortdata=[]};this._compare=function(c,b){var c=c.sortkey;var b=b.sortkey;if(c===undefined){c=null}if(b===undefined){b=null}if(c===null&&b===null){return 0}if(c===null&&b!==null){return 1}if(c!==null&&b===null){return -1}if(a.jqx.dataFormat){if(a.jqx.dataFormat.isNumber(c)&&a.jqx.dataFormat.isNumber(b)){if(c<b){return -1}if(c>b){return 1}return 0}else{if(a.jqx.dataFormat.isDate(c)&&a.jqx.dataFormat.isDate(b)){if(c<b){return -1}if(c>b){return 1}return 0}else{if(!a.jqx.dataFormat.isNumber(c)&&!a.jqx.dataFormat.isNumber(b)){c=String(c).toLowerCase();b=String(b).toLowerCase()}}}}try{if(c<b){return -1}if(c>b){return 1}}catch(d){var e=d}return 0};this._equals=function(c,b){return(this._compare(c,b)===0)}};a.extend(a.jqx._jqxGrid.prototype,{_rendersortcolumn:function(){var b=this;var c=this.getsortcolumn();if(this.sortdirection){a.each(this.columns.records,function(e,f){var d=a.data(document.body,"groupsortelements"+this.displayfield);if(c==null||this.displayfield!=c){a(this.sortasc).hide();a(this.sortdesc).hide();if(d!=null){d.sortasc.hide();d.sortdesc.hide()}}else{if(b.sortdirection.ascending){a(this.sortasc).show();a(this.sortdesc).hide();if(d!=null){d.sortasc.show();d.sortdesc.hide()}}else{a(this.sortasc).hide();a(this.sortdesc).show();if(d!=null){d.sortasc.hide();d.sortdesc.show()}}}})}},getsortcolumn:function(){if(this.sortcolumn){return this.sortcolumn}return null},removesort:function(){this.sortby(null)},sortby:function(c,e,d){if(this._loading){alert(this.loadingerrormessage);return false}if(c==null){e=null;c=this.sortcolumn}if(c){var b=this;if(d==undefined&&b.source.sortcomparer!=null){d=b.source.sortcomparer}if(e=="a"||e=="asc"||e=="ascending"||e==true){ascending=true}else{ascending=false}if(e!=null){b.sortdirection={ascending:ascending,descending:!ascending}}else{b.sortdirection={ascending:false,descending:false}}if(e!=null){b.sortcolumn=c}else{b.sortcolumn=null}if(b.source.sort||b.virtualmode){b.dataview.sortfield=c;if(e==null){b.dataview.sortfielddirection=""}else{b.dataview.sortfielddirection=ascending?"asc":"desc"}if(b.source.sort){b.source.sort(c,e);b._raiseEvent(6,{sortinformation:b.getsortinformation()});return}}else{b.dataview.sortby(c,e,d)}if(b.groupable&&b.groups.length>0){b._render(true,false,false);if(b._updategroupheadersbounds&&b.showgroupsheader){b._updategroupheadersbounds()}}else{if(b.pageable){b.dataview.updateview()}b._updaterowsproperties();b.rendergridcontent(true)}b._raiseEvent(6,{sortinformation:b.getsortinformation()})}},_togglesort:function(d){var b=this;if(d.sortable&&b.sortable){var c=b.getsortinformation();var e=null;if(c.sortcolumn!=null&&c.sortcolumn==d.displayfield){e=c.sortdirection.ascending;if(b.sorttogglestates>1){if(e==true){e=false}else{e=null}}else{e=!e}}else{e=true}b.sortby(d.displayfield,e,null)}}})})(jQuery);