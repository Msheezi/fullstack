# README

# MyPx
[MyPx](https://mypx123.herokuapp.com/)

MyPx is an app gearded towards allowing photographers of every level to share and showcase their work.  This project is modeled off of the 500px website.  This app uses a Rails backend with a React/Redux frontend.  This app was originally built in 9 days.  

## Features


* User authentication using BCrypt encryption
* Users can create a profile and upload their pictures
* Users can see all the photos they've previously posted

### Photo Uploads: 

From the navigation bar, users can select the "+" symbol to open the modal below.  
The Attach Photo button serves as the means to submit the photo as well as closing the modal.  To ensure the modal doesn't close prematurely and prevent the user from seeing important errors, additional logic was added into the `handleSubmit` function.  Once a user submits the photo, if it is successfully persisted to the database, the modal is closed and the user is directed back to the index page and can see their recently added photo.  If the photo is not successfully persisted, errors are rendered and the modal remains open until the user resolves.  Once successfully saved, the modal will close and errors will clear. 

![alt text](https://github.com/Msheezi/fullstack/blob/master/app/assets/images/upload.png "Logo Image Upload")


```javascript
 handleSubmit(e) {
        this.props.submitPost(formData)
        .then(() => {
             this.props.handleClose();
             this.props.clearErrors();
             this.setState({
                title: "",
                category_id: "",
                author_id: this.props.currentUser,
                camera_name: "",
                photoFile:  undefined,
                photoUrl: ""

            })
        }
        , () => this.renderErrors())
 ```
Features to be implemeted at a later date
* Comments
* Photos Categories and Search
* Photo Detail page with specifics (camera and lens settings)

