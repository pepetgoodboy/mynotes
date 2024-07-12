<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AllPostsController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        $posts = Post::with(['user', 'category'])->latest()->get();
        return Inertia::render('AllPosts/Index', [
            'posts' => $posts
        ]);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('allposts.index')->with('message', 'Post berhasil dihapus');
    }
}