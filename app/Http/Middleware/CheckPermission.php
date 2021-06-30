<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        $routeName = Route::currentRouteName();
        $permission = $user->getAllPermissions()->pluck('name')->toArray();
        if( !in_array($routeName , $permission) )
        {
            return response()->json([
                'status' => "Bạn không có quyền này"
            ], 403);
        }
        return $next($request);
    }
}