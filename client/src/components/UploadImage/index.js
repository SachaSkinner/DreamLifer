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
            this.setState(() => ({ image: image }));
        };
    };

    componentDidMount() {  
        // API.takeUrl(this.props.User.id)
        //             .then(res => console.log('url was taken'))
        //             .catch(err => console.log(err));
        // this.props.User.url=this.state.url;


        // console.log(this.props.User.url)
        // this.setState({url: this.props.User.url});
        // this.state.url = this.props.User.url;
        const images = storage.ref().child('images/');
        const image = images.child('profile_p.jpg');
        image.getDownloadURL().then((url) => { this.setState({ url: url }) }
        );
    };

    loadPicture = (urlBack) => {
        const images = storage.ref().child('images/');
        const image = images.child(urlBack);
        image.getDownloadURL().then((url) => { this.setState({ image: url }) }
        );  
    };

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

                    console.log(this.props.User.id, this.props.User.url);

                    API.updateUrl(this.props.User.id, this.props.User.url)
                    .then(res => console.log('uploaded'))
                    .catch(err => console.log(err));

                });

            });
        };

    render() {
        const style = {
            
           marginLeft: "5%",
           marginTop: "5%",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'inline-block'

        }
        const input = {
            marginLeft: 0
        }
        const image = {
            borderRadius: "50%"
        }
        
        return (

            <div style={style}>
                <img style={image} src={this.state.url} alt="Uploaded images" height="200" width="200" />
                <br></br>
                <progress value={this.state.progress} max="100" />
                <br></br>
                <input style={input}type='file' onChange={this.handleChange} />
                <br></br>
                <button onClick={this.handleUpload}>Upload your profile picture!</button>
                <br />
            </div>
        )
    }
}

export default ImageUpload