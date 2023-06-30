<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomeView', [
        "posts" => Post::with('user:id,name')->latest()->get(),
    ]);
});

Route::get('/intro', function () {
    return Inertia::render('IntroView');
});

Route::get('/uses', function () {
    return Inertia::render('UsesView');
});

Route::get('/contact', function () {
    return Inertia::render('ContactView');
});

Route::get('/blog', function () {
    return Inertia::render('Blog/BlogView', [
        "posts" => Post::with('user:id,name')->latest()->get(),
    ]);
});

Route::get('/blog/post', function () {
    return Inertia::render('Blog/BlogPostView');
});

Route::get('/dashboard', function () {
    return Inertia::render('DashboardView');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('posts', PostController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::get('/blog/create', function () {
    return Inertia::render('Auth/Blog/CreatePostView');
})->middleware(['auth', 'verified'])->name('create.post');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
