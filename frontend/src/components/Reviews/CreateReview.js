import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import '../contentPages/pages.css';
import Button from 'react-bootstrap/Button';
import ReviewSearchBox from "./ReviewSearchBox";
import InputResults from "./InputResults";


const Review =() => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=84a99a76`

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
        setMovies(responseJson.Search);
        }
    };

    useEffect(()=>{
        getMovieRequest(searchValue);
    }, [searchValue]);


    return (
        
        <div className="page">
            <Form className="reviewStyling">

                <Form.Group className="selectMovie">
                    <Form.Label className="selectLabel">Select a movie to review: </Form.Label>
                    <ReviewSearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <InputResults movies = {movies}/>
                </Form.Group> 

                <Form.Group className="reviewButtons" style={{ display: 'flex' }}>
                    <Form.Label >Choose Your Rating</Form.Label>
                    <Form.Check  label="1" type="radio"></Form.Check>
                    <Form.Check  label="2" type="radio"></Form.Check>
                    <Form.Check  label="3" type="radio"></Form.Check>
                    <Form.Check  label="4" type="radio"></Form.Check>
                    <Form.Check  label="5" type="radio"></Form.Check>
                </Form.Group>

                <Form.Group className="writeReview">
					<Form.Control as="textarea" type="text" placeholder="Write your review here" />
				</Form.Group>
                
                <Button className="submitReview" type="submit"> Save Review </Button>
            
            </Form>
      </div>
    )
}

export default Review;