// userData.then((data) => console.log(data)).catch((error) => console.log(error));

async function getDataFetched() {
  let apiUrl = "./data/photographers.json";
  let response = await fetch(apiUrl);
  console.log(response.status);
  let data = await response.json();
  console.log(data);

  // Extraire ID

  let getUrlId = window.location.search;
  let getParamsId = new URLSearchParams(getUrlId);
  let numberId = getParamsId.get("id");
  console.log(numberId);

  //   let urlData = new URL(`photographer.html/numéro`);
  //   let params = new URLSearchParams(window.location.search);
  //    document.getElementById("id");
  // let url = 'photographer.html/'
  // handle data

  //   const data = await response.json();
  //   console.log(typeof data);
  //   console.log(data.photographers);
  //   console.log(data.media);
  //   console.log(data.photographers[0]);
  let media = [
    {
      id: 342550,
      photographerId: 82,
      title: "Fashion Yellow Beach",
      image: "Fashion_Yellow_Beach.jpg",
      likes: 62,
      date: "2011-12-08",
    },
  ];
  console.log(data.media[0]);
  console.log(data.media);

  //   if (numberId === photographerId )
  return {
    media: [...media],
  };
}

getDataFetched();
