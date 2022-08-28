import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import "./App.css";

const cl = console.log;

const Preview = (props) => {
  if (!props.classificationList.records || !props.centuryList.records) {
    return <></>;
  }

  const prevHandler = async () => {
    if (props.art.info && props.art.info.prev !== undefined) {
      const prevPage = props.art.info.prev;
      cl(prevPage);
      try {
        const response = await fetch(prevPage);
        const data = await response.json();
        cl(data);
        props.setArt(data);
      } catch (error) {
        cl(error);
      }
    }
  };

  const nextHandler = async () => {
    if (props.art.info && props.art.info.next !== undefined) {
      const nextPage = props.art.info.next;
      cl(nextPage);
      try {
        const response = await fetch(nextPage);
        const data = await response.json();
        cl(data);
        props.setArt(data);
      } catch (error) {
        cl(error);
      }
    }
  };

  return (
    <div className="preview">
      <div className="page-btn-wrapper">
        <p>Browse Gallery</p>
        <button className="preview-btn-previous" onClick={prevHandler}>
          Previous
        </button>
        <button className="preview-btn-next" onClick={nextHandler}>
          Next
        </button>
      </div>
      {props.searched ? (
        <div className="all-art-cards">
          {props.art.records.map((artwork) => {
            return (
              <div
                key={artwork.id}
                className="card"
                onClick={() => {
                  props.setSelectedArt(artwork);
                }}
              >
                <p key={artwork.title}>{artwork.title}</p>
                {artwork.images ? (
                  <img
                    key={artwork.id}
                    src={artwork.primaryimageurl}
                    className="preview-image"
                  ></img>
                ) : (
                  <div className="preview-no-image">
                    <p>(no images)</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Preview;
