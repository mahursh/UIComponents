document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
  });
  
  document.getElementById('fileInput').addEventListener('change', function() {
    const fileList = document.getElementById('fileList');
    const files = this.files;
    
    Array.from(files).forEach(file => {
      const fileItem = document.createElement('div');
      fileItem.classList.add('file-item');
      fileItem.innerHTML = `
        <span class="file-name">${file.name}</span>
        <button class="close-btn">Close</button>
      `;
      fileList.appendChild(fileItem);
      
      const closeBtn = fileItem.querySelector('.close-btn');
      closeBtn.addEventListener('click', function() {
        fileList.removeChild(fileItem);
      });
    });


    event.preventDefault();
  });
  
  document.getElementById('submitBtn').addEventListener('click', function() {
    const fileList = document.getElementById('fileList');
    if (fileList.children.length === 0) {
      alert('At least one file should be added.');
      return;
    }
    event.preventDefault();
    
    // Connect my java backend to this
  });
  









// const uploadBtn = document.getElementById("uploadBtn");
// const fileInput = document.getElementById("fileInput");

// function showFilesList() {
//   const fileList = document.getElementById("fileList");
//   const files = this.files;
//   Array.from(files).forEach((file) => {
//     const fileItem = document.createElement("div");
//     fileItem.classList.add("file-item");
//     fileItem.innerHTML = `
//         <span class="file-name">${file.name}</span>
//         <button class="close-btn">Close</button>
//       `;
//     fileList.appendChild(fileItem);

//     const closeBtn = fileItem.querySelector(".close-btn");
//     closeBtn.addEventListener("click", function () {
//       fileList.removeChild(fileItem);
//     });
//   });
// }

// function showFileInput() {
//   document.getElementById("fileInput").click();
// }

// const btnsEvents = () => {
//   uploadBtn.addEventListener("click", showFileInput);
//   fileInput.addEventListener("change", showFilesList);
// };

// document.addEventListener("DOMContentLoaded", btnsEvents);
