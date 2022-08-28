import "./App.css";
import React from "react";

const Display = (props) => {
  const cl = console.log;
  const artwork = props.selectedArt;

  if (!props.selectedArt) {
    return <div className="display"></div>;
  }

  if (props.selectedArt) {
    return (
      <div className="display">
        <p className="art-title">{artwork.title}</p>
        {artwork.images ? (
          <div>
            {artwork.images ? (
              artwork.images.map((image) => {
                return (
                  <div key={image.idsid}>
                    <img
                      src={image.baseimageurl}
                      className="selected-art"
                      key={image.idsid}
                    ></img>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div>
            <p className="no-images-tag">(no images)</p>
          </div>
        )}
        <p>
          Culture:{" "}
          {artwork.culture ? (
            <span
              onClick={async (event) => {
                const resultUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&culture=${artwork.culture}`;
                try {
                  const response = await fetch(resultUrl);
                  const data = await response.json();
                  cl(data);
                  if (data.records.length === 0) {
                    cl("no results, changing case formatting...");
                    const newString = artwork.medium.toLowerCase();
                    const newUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&culture=${newString}`;
                    try {
                      const response = await fetch(newUrl);
                      const data = await response.json();
                      cl(data);
                      props.setArt(data);
                    } catch (error) {
                      cl(error);
                    }
                  } else {
                    props.setArt(data);
                  }
                } catch (error) {
                  cl(error);
                }
              }}
            >
              {artwork.culture}
            </span>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          Century:{" "}
          {artwork.century ? (
            <span
              onClick={async (event) => {
                const resultUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&century=${artwork.century}`;
                try {
                  const response = await fetch(resultUrl);
                  const data = await response.json();
                  cl(data);
                  if (data.records.length === 0) {
                    cl("no results, changing case formatting...");
                    const newString = artwork.medium.toLowerCase();
                    const newUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&century=${newString}`;
                    try {
                      const response = await fetch(newUrl);
                      const data = await response.json();
                      cl(data);
                      props.setArt(data);
                    } catch (error) {
                      cl(error);
                    }
                  } else {
                    props.setArt(data);
                  }
                } catch (error) {
                  cl(error);
                }
              }}
            >
              {artwork.century}
            </span>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          Period:{" "}
          {artwork.period ? (
            <span
              onClick={async (event) => {
                const resultUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&period=${artwork.period}`;
                try {
                  const response = await fetch(resultUrl);
                  const data = await response.json();
                  cl(data);
                  if (data.records.length === 0) {
                    cl("no results, changing case formatting...");
                    const newString = artwork.medium.toLowerCase();
                    const newUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&period=${newString}`;
                    try {
                      const response = await fetch(newUrl);
                      const data = await response.json();
                      cl(data);
                      props.setArt(data);
                    } catch (error) {
                      cl(error);
                    }
                  } else {
                    props.setArt(data);
                  }
                } catch (error) {
                  cl(error);
                }
              }}
            >
              {artwork.period}
            </span>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          Medium:{" "}
          {artwork.medium ? (
            <span
              onClick={async (event) => {
                const resultUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&medium=${artwork.medium}`;
                try {
                  const response = await fetch(resultUrl);
                  const data = await response.json();
                  cl(data);
                  if (data.records.length === 0) {
                    cl("no results, changing case formatting...");
                    const newString = artwork.medium.toLowerCase();
                    const newUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&medium=${newString}`;
                    try {
                      const response = await fetch(newUrl);
                      const data = await response.json();
                      cl(data);
                      props.setArt(data);
                    } catch (error) {
                      cl(error);
                    }
                  } else {
                    props.setArt(data);
                  }
                } catch (error) {
                  cl(error);
                }
              }}
            >
              {artwork.medium}
            </span>
          ) : (
            "N/A"
          )}
        </p>
        <p>Dimensions: {artwork.dimensions ? artwork.dimensions : "N/A"},</p>
        <p>
          Technique:{" "}
          {artwork.technique ? (
            <span
              onClick={async (event) => {
                const resultUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&technique=${artwork.technique}`;
                try {
                  const response = await fetch(resultUrl);
                  const data = await response.json();
                  cl(data);
                  if (data.records.length === 0) {
                    cl("no results, changing case formatting...");
                    const newString = artwork.medium.toLowerCase();
                    const newUrl = `${props.BASE_URL}/object?apikey=${props.KEY}&technique=${newString}`;
                    try {
                      const response = await fetch(newUrl);
                      const data = await response.json();
                      cl(data);
                      props.setArt(data);
                    } catch (error) {
                      cl(error);
                    }
                  } else {
                    props.setArt(data);
                  }
                } catch (error) {
                  cl(error);
                }
              }}
            >
              {artwork.technique}
            </span>
          ) : (
            "N/A"
          )}
        </p>
        <p>Department: {artwork.department ? artwork.department : "N/A"}</p>
        <p>Division: {artwork.division ? artwork.division : "N/A"}</p>
        <p>
          Contact:{" "}
          <a
            onClick={(event) => {
              event.preventDefault();
              window.location.href = `mailto:${artwork.contact}?subject=${artwork.title}`;
              event.target.style.color = "#551a8b";
            }}
            id="contact-link"
          >
            {artwork.contact}
          </a>
        </p>
        <p>
          Accession: {artwork.accessionyear ? artwork.accessionyear : "N/A"}
        </p>
        <p>Credit: {artwork.creditline ? artwork.creditline : "N/A"}</p>
      </div>
    );
  }
};

export default Display;
