<?php


namespace Bookkeeper\Http\Controllers;


class OverviewController extends BookkeeperController {

    /**
     * Shows the overview
     *
     * @return view
     */
    public function index() {
        return $this->compileView('overview.index');
    }

}