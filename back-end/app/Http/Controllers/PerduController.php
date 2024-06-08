<?php

namespace App\Http\Controllers;

use App\Models\Perdu;
use Illuminate\Http\Request;

class PerduController extends Controller
{
    use ApiResponseTrait;
    public function perdus()
    {
        $perdu = Perdu::all();
        return $this->apiResponse($perdu, "There is the perdus", 200);
    }
    public function addPerdu(Request $request)
    {
        // $request->validate(
        //     [
        //         "name" => "required"
        //     ]
        // );
        $user = $request->user();

        $image1 = null;
        $image2 = null;
        $image3 = null;

        if (!$user) {
            return response()->json($this->apiResponse($user, "You should authticated before", 500));
        }

        if ($request->hasFile('image1')) {
            $image1 = $request->file('image1');
            $image1Name = time() . "." . $image1->getClientOriginalExtension();
            $image1->move(public_path("/perdus"), $image1Name);
        }
        if ($request->hasFile('image2')) {
            $image2 = $request->file('image2');
            $image2Name = time() . "." . $image2->getClientOriginalExtension();
            $image2->move(public_path("/perdus"), $image2Name);
        }
        if ($request->hasFile('image3')) {
            $image3 = $request->file('image3');
            $image3Name = time() . "." . $image3->getClientOriginalExtension();
            $image3->move(public_path("/perdus"), $image3Name);
        }

        $perdu = Perdu::create([
            "fullName" => $request->fullName,
            "dateDePerdre" => $request->dateDePerdre,
            "ville" => $request->ville,
            "dateDeNaissance" => $request->dateDeNaissance,
            "description" => $request->description,
            "image1" => $request->image1,
            "image2" => $request->image2,
            "image3" => $request->image3,
            "cin" => $request->cin,
            "phone" => $request->phone,
            "user_id" => $user->id,
        ]);

        return response()->json($this->apiResponse($perdu, "The perdu added with succesffully", 200));
    }
    public function perdu($cin)
    {
        $perdu = Perdu::where("cin", $cin)->get();

        if (!$perdu) {
            return response()->json($this->apiResponse(null, "The perdu not found"), 200);
        }

        return response()->json($this->apiResponse($perdu, "Find it", 200));
    }

    public function editPerdu($id)
    {
        $perdu = Perdu::find($id);

        if (!$perdu) {
            return response()->json($this->apiResponse($perdu, "The perdu not found", 404));
        }

        return response()->json($this->apiResponse($perdu, "The perdu was finded", 200));
    }
    public function updatePerdu(Request $request)
    {
        $perdu = Perdu::find($request->id);

        if (!$perdu) {
            return response()->json($this->apiResponse($perdu, "The perdu was updated"));
        }

        $perdu->update($request->all());
        return response()->json($this->apiResponse($perdu, "The perdu was updated", 200));
    }
    public function deletePerdu($id)
    {
        $perdu = Perdu::find($id);

        if (!$perdu) {
            return response()->json($this->apiResponse($perdu, "The perdu not found", 404));
        }

        $perdu->delete();
        return response()->json($this->apiResponse($perdu, "The perdu was deleted", 200));
    }
}
