define(["appModule"],function(e){e.lazy.service("AlertService",[function(){var e=function(e){$("#alertMessage").html(e);$("#alertMessage").css("display","inline-block");$("#alertMessage").show();setTimeout(function(){t()},1500)};var t=function(){$("#alertMessage").hide();$("#alertMessage").css("display","none")};return{show:function(t){return e(t)}}}])})