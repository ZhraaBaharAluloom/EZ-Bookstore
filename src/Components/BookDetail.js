import React from "react";
import books from "../books";
import { Link, Redirect, useParams } from "react-router-dom";
import RecommandedList from "./ReccomandedList";
import spencerJbooks from "../books";

//Styles
import { DetailWrapper } from "../styles";

const BookDetail = ({ book }) => {
  const { bookSlug } = useParams();
  book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;

  return (
    <>
      <div>
        <DetailWrapper>
          <img src={book.image} alt={book.title} />
          <p>Title: {book.title}</p>
          <p>Released: {book.released}</p>
          <p> Genre: {book.genre}</p>
          <p> Author: {book.author}</p>
          <p> Price: {book.price} KD</p>
          <br />
          <hr />
          <h1>Recommanded Books !</h1>
          <RecommandedList book={book} />
        </DetailWrapper>
      </div>
      {/* <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default BookDetail;
