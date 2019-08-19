# README

# MyPx
[MyPx](https://mypx123.herokuapp.com/)

MyPx is an app gearded towards allowing photographers of every level to share and showcase their work.  This project is modeled off of the 500px website.  This app uses a Rails backend with a React/Redux frontend.  This app was originally built in 9 days.  

## Features


* User authentication using BCrypt encryption
* Users can create a profile and upload their pictures
* Users can see all the photos they've previously posted
* Drag and drop photo uploads

### Photo Uploads: 

From the navigation bar, users can select the "+" symbol to open the photo upload modal. Users have the option to drag and drop or click the button to open the browser dialog to select a file.  Clicking outside of the modal will trigger the modal to close and clear any data captured but not persisted to the database.  

![alt text](https://github.com/Msheezi/fullstack/blob/master/app/assets/images/modal-start.png "Intial Modal State")

Once a photo is selected, the update to state will render the image preview and input form for users to add information to complete the post.  After posting, the user is redirected to the show page for the post. 

![alt text](https://github.com/Msheezi/fullstack/blob/master/app/assets/images/modal-detail.png "Modal after photo selected")
 
 Below is a snippet of the code that enables the drag and drop on the modal initially and the function calls that manage the form display post attachment

```javascript
 render(){
    
    if (this.props.postModalOpen){
      if (!this.state.photoFile) {
       return (
         <div className="modal-background" onClick={this.modalClose}>
           <div className="modal-box" onClick={e => e.stopPropagation()}
             onDragOver={e => e.preventDefault()}
             onDragLeave={this.handleDragLeave}
             onDrop={this.handleDrop}>
           { this.renderFileUpload()}
          </div> 
        </div>
        
        )
      } else {
        return (
          <div className="modal-background" onClick={this.modalClose}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
              {this.renderUpload()}
            </div>
          </div>
        )
      }
    } else {
      return null
    }

  }
 ```
 
 ### Comments: 
 
 
Features to be implemeted at a later date

* Photos Categories and Search
* Photo Detail page with specifics (camera and lens settings)

