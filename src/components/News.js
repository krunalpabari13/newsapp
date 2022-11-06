import React,{useState,useRef} from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
 
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loader, setloader] = React.useState(true);
  const [totalResults, setTotalResults] = useState(0)
  const parentref=useRef(null)
  const a = async () => {
    let f = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=185fd7ebb3d843aea4ed0639b3dc330f&page=${page}&pageSize=10`
    );
    props.setProgress(10);
    let j = await f.json();
    props.setProgress(50);
    setData(j.articles);
    props.setProgress(70);
    
    props.setProgress(100);
    setTotalResults(j.totalResults)
  };
  React.useEffect(() => {
    a();
   
   
  },[]);

 
  async function fetchMoreData()
  {

    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=185fd7ebb3d843aea4ed0639b3dc330f&page=${page+1}&pageSize=10`;
    setPage(page+1) 
    let data1 = await fetch(url);
    let parsedData = await data1.json()
    setData(data.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <>
      <div className="container my-4">
        <strong className="my-4">Top Headlines Of India</strong>
      </div>

      <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={data.length!==totalResults}
                    loader={<Spinner/>}
                    endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                > 
      <div className="container">
        <div className="row my-4 " ref={parentref}>
          {data.map((element) => (
            <div className="col-md-4" >
            
              <Card
                
                key={element.url}
                firstname={!element.title?"notitle":element.title}
                url={element.urlToImage}
                loading={data.length}
              ></Card>
            </div>
          ))}
        </div>
      </div>
      </InfiniteScroll>
      
     

    </>
  );
}
