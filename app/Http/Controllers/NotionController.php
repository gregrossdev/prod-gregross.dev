<?php

namespace App\Http\Controllers;

use FiveamCode\LaravelNotionApi\Notion;
use Illuminate\Http\Request;

class NotionController extends Controller
{
//    public function dbview()
//    {
//        $apiToken = env("NOTION_API_TOKEN");
//        $notion = new Notion($apiToken);
//        $databaseId = '0c79c285a94846a38d42deb6644eba94';
//        $database   = $notion->databases()->find($databaseId);
//        $arrayOfPropertyNames = $database->getPropertyKeys();
//        $collectionOfProperties = $database->getProperties();
//        return view('dbview', [
//            "names" => $arrayOfPropertyNames,
//            "coll" => $collectionOfProperties,
//        ]);
//    }

    public function dbview()
    {
        $apiToken = env("NOTION_API_TOKEN");
        $notion = new Notion($apiToken);
        $databaseId = '0c79c285a94846a38d42deb6644eba94';
        $pageCollection   = $notion->database($databaseId)->query();
        $collectionOfPages = $pageCollection->asCollection();
        $jsonOfPages = $pageCollection->asJson();
        return view('dbview', [
            "names" => $jsonOfPages,
//            "coll" => $jsonOfPages,
        ]);
    }
}
