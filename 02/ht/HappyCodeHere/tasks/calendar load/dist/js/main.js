"use strict";function handleButtonClick(){console.log("clicked");var e=void 0,t=void 0,d=void 0,n=void 0,o=void 0,l=void 0;e=document.getElementById("id").value,t=document.getElementById("change-date").checked||"",d=document.getElementById("add-events").checked||"",n=document.getElementById("delete-events").checked||"",o=document.getElementById("classes").value,l=document.getElementById("title").value,console.dir(t),newUrl=url+"?id="+e+"&showControls="+t+"&allowAddEvents="+d+"&allowRemoveEvents="+n+"&className="+o+"&title="+l,console.log(newUrl);var c=document.querySelector("iframe");c.src=newUrl;var r=document.getElementById("copy-code");r.innerText=newUrl}var url="https://cdn.rawgit.com/HappyCodeHere/js--base-course/02/02/ht/HappyCodeHere/tasks/calendar/dist/index.html",newUrl="",button=document.querySelector("button");button.addEventListener("click",handleButtonClick);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaGFuZGxlQnV0dG9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiaWQiLCJzaG93Q29udHJvbHMiLCJhbGxvd0FkZEV2ZW50cyIsImFsbG93UmVtb3ZlRXZlbnRzIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJjaGVja2VkIiwiZGlyIiwibmV3VXJsIiwidXJsIiwiaWZyYW1lIiwicXVlcnlTZWxlY3RvciIsInNyYyIsImNvcHkiLCJpbm5lclRleHQiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQVNBLFNBQVNBLHFCQUNQQyxRQUFRQyxJQUFJLFVBRVosSUFBSUMsR0FBQUEsT0FBSUMsRUFBQUEsT0FBY0MsRUFBQUEsT0FBZ0JDLEVBQUFBLE9BQW1CQyxFQUFBQSxPQUFXQyxFQUFBQSxNQUdwRUwsR0FBS00sU0FBU0MsZUFBZSxNQUFNQyxNQUNuQ1AsRUFBZUssU0FBU0MsZUFBZSxlQUFlRSxTQUFXLEdBQ2pFUCxFQUFpQkksU0FBU0MsZUFBZSxjQUFjRSxTQUFXLEdBQ2xFTixFQUFvQkcsU0FBU0MsZUFBZSxpQkFBaUJFLFNBQVcsR0FDeEVMLEVBQVlFLFNBQVNDLGVBQWUsV0FBV0MsTUFDL0NILEVBQVFDLFNBQVNDLGVBQWUsU0FBU0MsTUFHekNWLFFBQVFZLElBQUlULEdBRVpVLE9BQVlDLElBQVosT0FBc0JaLEVBQXRCLGlCQUF5Q0MsRUFBekMsbUJBQXdFQyxFQUF4RSxzQkFBNEdDLEVBQTVHLGNBQTJJQyxFQUEzSSxVQUE4SkMsRUFFOUpQLFFBQVFDLElBQUlZLE9BRVosSUFBSUUsR0FBU1AsU0FBU1EsY0FBYyxTQUNwQ0QsR0FBT0UsSUFBTUosTUFFYixJQUFJSyxHQUFPVixTQUFTQyxlQUFlLFlBQ25DUyxHQUFLQyxVQUFZTixPQWpDbkIsR0FBSUMsS0FBTSw2R0FDTkQsT0FBUyxHQUlUTyxPQUFTWixTQUFTUSxjQUFjLFNBQ3BDSSxRQUFPQyxpQkFBaUIsUUFBU3RCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXJsID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vSGFwcHlDb2RlSGVyZS9qcy0tYmFzZS1jb3Vyc2UvMDIvMDIvaHQvSGFwcHlDb2RlSGVyZS90YXNrcy9jYWxlbmRhci9kaXN0L2luZGV4Lmh0bWwnO1xyXG52YXIgbmV3VXJsID0gJyc7XHJcblxyXG5cclxuXHJcbnZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQnV0dG9uQ2xpY2spO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKCkge1xyXG4gIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcblxyXG4gIGxldCBpZCwgc2hvd0NvbnRyb2xzLCBhbGxvd0FkZEV2ZW50cywgYWxsb3dSZW1vdmVFdmVudHMsIGNsYXNzTmFtZSwgdGl0bGU7XHJcblxyXG5cclxuICBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZCcpLnZhbHVlO1xyXG4gIHNob3dDb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2UtZGF0ZScpLmNoZWNrZWQgfHwgJyc7XHJcbiAgYWxsb3dBZGRFdmVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWV2ZW50cycpLmNoZWNrZWQgfHwgJyc7XHJcbiAgYWxsb3dSZW1vdmVFdmVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWV2ZW50cycpLmNoZWNrZWQgfHwgJyc7XHJcbiAgY2xhc3NOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzZXMnKS52YWx1ZTtcclxuICB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG5cclxuXHJcbiAgY29uc29sZS5kaXIoc2hvd0NvbnRyb2xzKTtcclxuXHJcbiAgbmV3VXJsID0gYCR7dXJsfT9pZD0ke2lkfSZzaG93Q29udHJvbHM9JHtzaG93Q29udHJvbHN9JmFsbG93QWRkRXZlbnRzPSR7YWxsb3dBZGRFdmVudHN9JmFsbG93UmVtb3ZlRXZlbnRzPSR7YWxsb3dSZW1vdmVFdmVudHN9JmNsYXNzTmFtZT0ke2NsYXNzTmFtZX0mdGl0bGU9JHt0aXRsZX1gO1xyXG5cclxuICBjb25zb2xlLmxvZyhuZXdVcmwpO1xyXG5cclxuICB2YXIgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XHJcbiAgaWZyYW1lLnNyYyA9IG5ld1VybDtcclxuXHJcbiAgdmFyIGNvcHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weS1jb2RlJyk7XHJcbiAgY29weS5pbm5lclRleHQgPSBuZXdVcmw7XHJcblxyXG59Il19