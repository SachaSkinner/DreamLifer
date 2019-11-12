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
        
        API.takeUrl(this.props.User.id)
                    .then(res => 
                        {
                           
                        if(!res.data.url){
                            this.setState({url: "https://firebasestorage.googleapis.com/v0/b/dreamlifer-36c5e.appspot.com/o/images%2Fprofile_p.jpg?alt=media&token=b87d233a-333c-4710-8751-826b8e53d572"}) 

                        }
                        else{
                            this.setState({url: res.data.url})
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
                
               
                <progress className="add-picture" value={this.state.progress} max="100" />
                
                <br></br>
                <input className="add-picture" style={input}type='file' onChange={this.handleChange} />
                <br></br>
                <button className="add-picture" onClick={this.handleUpload}>Upload your profile picture!</button>
                <br />
            </div>
        )
    }
}

export default ImageUpload