<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{    
    public function index()
    {
        $posts = Auth::user()->posts()->with('category')->get();
        return Inertia::render('Posts/Index', [
            'posts'=> $posts
        ]);
    }
    
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Posts/Create', ['categories' => $categories]);
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'=> 'required|string|max:255',
            'content'=> 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
        ]);

        $validated['user_id'] = Auth::user()->id;

        Post::create($validated);

        //redirect
        return redirect()->route('posts.index')->with('message', 'Post Berhasil Disimpan!');
    }
    
    public function show(Post $post)
    {
        $this->authorize('view', $post);
        return Inertia::render('Posts/Show', ['post' => $post]);
    }

    public function edit(Post $post)
    {
        $this->authorize('update', $post);
        return Inertia::render('Posts/Edit', [
            'post' => $post,
            'categories' => Category::all()
        ]);
    }
    
    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content'=> 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            ]);

        $post->update($validated); 

        //redirect
        return redirect()->route('posts.index')->with('message', 'Post Berhasil Diupdate!');
    }
    
    public function destroy(Post $post)
    {
        $post->delete();

        //redirect
        return redirect()->route('posts.index')->with('message', 'Post Berhasil Dihapus!');
    }
}