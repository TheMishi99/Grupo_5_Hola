import React from "react";
import LastUserInDb from "./LastUserInDb";
import CategoriesInDb from "./CategoriesInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastUserInDb />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <CategoriesInDb />
    </div>
  );
}

export default ContentRowCenter;
