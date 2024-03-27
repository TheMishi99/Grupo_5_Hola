import React from "react";
import LastUserInDb from "./LastUserInDb";
import CategoriesInDb from "./CategoriesInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last User in DB -->*/}
      <LastUserInDb />
      {/*<!-- End content row last User in Data Base -->*/}

      {/*<!-- Categories in DB -->*/}
      <CategoriesInDb />
    </div>
  );
}

export default ContentRowCenter;
