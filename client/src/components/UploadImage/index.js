import React, { Component } from 'react'
import { storage } from "../../firebase"
import API from '../../utils/API';
import './style.css';


class ImageUpload extends Component {

    state = {
        image: null,
        url: '',
        progress: 0
    }

    displayModal = () => {
        let modal = document.getElementById('modal');
        modal.style.display = 'block';
    };

    closeModal = () => {
        let modal = document.getElementById('modal');
        modal.style.display = 'none';
    };

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0]

            if (image.type.slice(0, 5) !== 'image') {
                document.getElementById('addPic').disabled = true;
            } else {
                this.setState(() => ({ image: image }));
                document.getElementById('addPic').disabled = false;
            };
        };
    };

    componentDidMount() {

        API.takeUrl(this.props.User.id)
            .then(res => {

                if (!res.data.url) {
                    this.setState({ url: "https://firebasestorage.googleapis.com/v0/b/dreamlifer-36c5e.appspot.com/o/images%2Fprofile-pic.jpg?alt=media&token=4f1ae793-de2a-4d9c-98be-2bf274ee6fe7"})

                }
                else {
                    this.setState({ url: res.data.url })
                }
            })
            .catch(err => console.log(err));
    };

    loadPicture = (urlBack) => {
        const images = storage.ref().child('images/');
        const image = images.child(urlBack);
        image.getDownloadURL().then((url) => { this.setState({ image: url }) }
        );
    };

    handleUpload = () => {
        if (this.state.image !== null) {
        const { image } = this.state;

        const uploadTask = storage.ref('images/' + image.name + '').put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progress function ...
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress })
            },
            (error) => {
                // error function 
                console.log(error)
            },
            () => {
                //  complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {

                    this.setState({ url });
                    this.props.User.url = this.state.url;
                    API.updateUrl(this.props.User.id, this.props.User.url)
                        .then(() => {
                            this.closeModal();
                        })
                        .catch(err => console.log(err));

                });

            });
        } else {
            return null;
        };
    };

    render() {
       
       
        const input = {
           
            marginLeft: "55px",
            marginBottom: '5px'
        }

        const image = {
            borderRadius: "50%",

        }


        return (
            <div>
                <div className="profilePic">
                    <img style={image} src={this.state.url} alt="" height="200" width="200" onClick={this.displayModal} />
                </div>
                <br></br>
                <div className='modal' id='modal'>
                    <div className="uploadInputs">
                        <span id='close' className='close' onClick={this.closeModal}>X</span>
                        <div className='header'>
                            <h4>Update your profile picture</h4>
                            <p>Valid image files only</p>
                        </div>
                        <progress className="add-picture" value={this.state.progress} max="100" />
                        <br></br>
                        <input className="add-picture chooseFile" style={input} type='file' onChange={this.handleChange} />                    
                        <button id='addPic' className="add-picture" onClick={this.handleUpload}>Upload photo</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUpload;