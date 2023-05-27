<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class OutletController extends Controller
{
    public function getOutlet(Request $request)
    {
        try {
            $user_id = $request->query('user_id');
            $outlets = DB::table('outlets')->where('user_id', $user_id)->get();

            return Response::json((object)[
                'msg' => 'success',
                'data' => $outlets,
            ]);
        } catch (\Throwable $th) {
            return Response::json((object) [
                'msg' => 'error',
                'data' => null,
            ]);
        }
    }
}
