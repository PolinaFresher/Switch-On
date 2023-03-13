import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { ROUTES } from 'shared/consts';
import { LoginModal, UserModel } from "models";
import { Sidebar, Modal, MiniPlayer } from 'components'
import React from "react";



function Layout() {
  const navigate = useLocation()
  return (
    <div>

      <Sidebar />
      {LoginModal.open ? <Modal /> : null}
      {UserModel.isLoggedIn() && navigate.pathname !== ROUTES.PLAYER ? <MiniPlayer /> : null}
    </div>
 
  );

}

export default observer(Layout)
