import React, { Component } from 'react'
import { storage} from "../../firebase"
import API from '../../utils/API';

class ImageUpload extends Component {
    state = {
        image: null,
        url: '',
        progress: 0
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState(() => ({ image: image }))

        }
    }

    componentDidMount() {
        
        const images = storage.ref().child('images/');

        const image = images.child('befunky_layer.png');

        image.getDownloadURL().then((url) => { this.setState({ image: url }) }
        );
      
    }
    loadPicture = (urlBack) => {
        // console.log(urlBack)
        const images = storage.ref().child('images/');

        const image = images.child(urlBack);

        image.getDownloadURL().then((url) => { this.setState({ image: url }) }
        );
        
    }

    handleUpload = () => {
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
                    
                    console.log(this.props.User)

                    API.updateUrl({
                        // this.props.User.url
                        url: this.state.url,

                    })
                        .then(res => this.loadPicture(res))
                        .catch(err => console.log(err));

                })

            });
    }
    render() {
        // console.log(this.props.User.id)
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'

        }
        return (

            <div style={style}>
                <progress value={this.state.progress} max="100" />
                <input type='file' onChange={this.handleChange} />
                <button onClick={this.handleUpload}>Upload</button>
                <br />
                <img src={this.state.url} alt="Uploaded images" height="300" width="400" />


            </div>
        )
    }
}

export default ImageUpload